<script>
    import Defence from "./players/Defence.svelte";
    import Mid from "./players/Mid.svelte";
    import Forward from "./players/Forward.svelte";
    import Gk from "./players/Gk.svelte";
    import Pitch from "$lib/pitch.png"

      let selectValue = "3-4-3",
        renderDef = 3,
        renderMid = 4,
        renderFw = 3,
        array = [],
        teamName = "Team Name"
      
const changeRender = () =>{
     array = selectValue.split("-")
     renderDef = Number(array[0])
     renderMid = Number(array[1])
     renderFw = Number(array[2])

    //  console.log(array)
}

</script>


<section>
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
        
    <h1>{teamName}</h1> 
        <div class="formation" style="background-image: url({Pitch});">
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
</section>

<style lang="scss">
  section{
    width: 70vw;
    margin-inline: auto;
    @include flex(column, center, center, 1rem);
    padding: 1rem;

    
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
    }
   }
  }
</style>