<script>
    import Defence from "./players/Defence.svelte";
    import Mid from "./players/Mid.svelte";
    import Forward from "./players/Forward.svelte";
    import Gk from "./players/Gk.svelte";
    import Pitch from "$lib/pitch.png"
    import { storage } from "$lib/firebase/firebase";
    import { ref, listAll, getDownloadURL } from "firebase/storage";
    import { storageHandlers } from "../../store/store";
    import { onMount } from "svelte";
    import { v4 } from "uuid"

      let selectValue = "3-4-3",
        renderDef = 3,
        renderMid = 4,
        renderFw = 3,
        array = [],
        teamName = "Team Name",
        savedFormations = [],
        noOfFormations = 0,
        container,
        imageUrl,
        downloadLink,
        tabs = ['Create Formation', 'Saved Formations'],
        activeTab = tabs[0]
      
onMount(() =>{
    downloadFormation()
})

const changeRender = () =>{
     array = selectValue.split("-")
     renderDef = Number(array[0])
     renderMid = Number(array[1])
     renderFw = Number(array[2])
}

const saveFormation = async () =>{
     container = container   
     const canvas = await html2canvas(container)
     const imageRef = ref(storage, `images/${teamName + v4()}`)

        imageUrl = canvas.toDataURL()
        downloadLink = document.createElement("a")
        downloadLink.href = imageUrl
        downloadLink.download = teamName
        downloadLink.click()

        await storageHandlers.upload(imageRef, imageUrl)

        downloadFormation()
}

const downloadFormation = () =>{
    const images = ref(storage, 'images')
    savedFormations = []

listAll(images).then(res => {
        res.items.forEach((image) =>{
         getDownloadURL(image).then(url => {
                savedFormations.push(url)
                
                noOfFormations = savedFormations.length
             })
        })
    })

    
}

</script>


<section>
    <div class="tabs">
        {#each tabs as tab, i}
            <button class:active={activeTab === tab} on:click={() => activeTab = tab}>{tab}
                {#if i === 1}
                    <sup style="font-weight: bold;">{noOfFormations}</sup>
                {/if}
            </button>
        {/each}
    </div>

    {#if activeTab === tabs[0]}
    <header>
    <label>
        Select Formation
    <select bind:value={selectValue} on:change={changeRender}>
        <option value="3-4-3">3-4-3</option>
        <option value="3-5-2">3-5-2</option>
        <option value="3-6-1">3-6-1</option>
        <option value="4-2-4">4-2-4</option>
        <option value="4-4-2">4-4-2</option>
        <option value="4-3-3">4-3-3</option>
        <option value="4-5-1">4-5-1</option>
        <option value="5-3-2">5-3-2</option>
        <option value="5-4-1">5-4-1</option>
        </select>
    </label>

    <label for="team name">
        Enter team name:
        <input type="text" name="team name" bind:value={teamName}>
    </label>
</header>
        
    <h1>{teamName}</h1> 
        <div class="formation" style="background-image: url({Pitch});" bind:this={container}>
        <div class="forward">
            {#each Array(renderFw) as _}
                <Forward />
            {/each}
        </div>
        <div class="mid">
            {#each Array(renderMid) as _}
                <Mid />
            {/each}
        </div>
        <div class="defence">
            {#each Array(renderDef) as _}
                <Defence />
            {/each}
        </div>
        <div class="keeper">
            <Gk />
        </div>
    </div>
    <button on:click={saveFormation}>Save</button>
    {/if}

    {#if activeTab === tabs[1]}
    <div class="images">
        {#each savedFormations as formation}
            <img src={formation} alt="">
        {/each}
    </div>
    {/if}
</section>

<style lang="scss">
  section{
    width: 70vw;
    margin-inline: auto;
    @include flex(column, center, center, 1rem);
    padding: 1rem;

    .tabs{
        @include flex(row, center, center, 0);
        white-space: nowrap;

        button{
            padding: 7px 14px;
            color: $black;
            background-color: $gray-background;
            border-radius: 0;
            cursor: pointer;

            &.active{
                color: $white;
                background: $blue;
            }

        }
    }

    header{
        @include flex(row, center, center, 1em);
        flex-wrap: wrap;
    }

    button{
        padding: 12px 24px;
        color: white;
        background-color: $black;
        cursor: pointer;
        border-radius: $border-radius-1;
        border: none;
    }


   .formation{
    @include flex(column, center, center, 2rem);
    padding: .5rem 1rem;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: $border-radius-1;
    height: 445px;
    width: 390px;

    div{
        display: flex;
        gap: 1.3rem;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
   }

   label{
    white-space: nowrap;
    input{
        padding: 7px;
        border-radius: $border-radius-1;
        border: solid $border $black;
        background: transparent;
    }
   }

   .images{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 1em;
        place-items: center;
        width: 100%;
        margin-top: 2rem;

        img{
            height: 300px;
            width: auto;
            max-width: 100%;
            object-fit: scale-down;
        }
   }
  }

  @media (max-width: 475px){
    section{
        width: 80vw;
    }
  }
</style>