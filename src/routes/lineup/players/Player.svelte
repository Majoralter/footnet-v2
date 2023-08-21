<script>
    import Shirt from "$lib/shirt.png"
    import { fade } from "svelte/transition";
   
    export let shirt = Shirt

   let active = false,
    name = "Player",
    number= Math.floor(Math.random() * 48) + 1 || "#",
    checked = false,
    isYellow = false,
    isRed = false
    

    const showInput = () =>{
        active = !active
    }
   </script>
   

   <section>
    {#if active}
    <div class="modal">
     <label for="name">
        Player Name:
        <input type="text" bind:value={name} name="name">
     </label>
     <label for="number">
        Number: 
        <input type="number" bind:value={number} name="number">
     </label>

     <div class="extras">
        <label>
            Y:<input type="checkbox" on:change={() => {isYellow = !isYellow}} {checked}>
        </label>
        <label>
            R:<input type="checkbox" on:change={() => {isRed = !isRed}} {checked}>
        </label>
    </div>

     <button on:click={showInput}>Confirm</button>
    </div>
    {/if}
 
    <div in:fade class="player" on:click={showInput} on:keydown={() => {}} role='button' tabindex="0">
    <img src={shirt} alt="">
    <h5>{number}</h5>
    <h4>{name}</h4>
    {#if isYellow}
    <span class="yellow"></span>
    {/if}

    {#if isRed}
    <div class="red"></div>
    {/if}
    </div>
   </section>
   
   <style lang="scss">
    section{
        .player{
          color: $black;
          @include flex(column, center, center, .2em);
          position: relative;
          cursor: pointer;
          position: relative;

          &:hover{
            scale: 1.1;
          }

          h5{
            position: absolute;
            top: 20%;
            color: #27233A;
          }
   
          img{
           height: 43px;
           width: auto;
          }

          .yellow,.red{
            position: absolute;
            top: 0;
            height: 8px;
            width: 6px;
            border-radius: .1px;
          }

          .yellow{
            right: 3px;
            background-color: yellow;
          }

          .red{
            right: 0;
            background-color: red;
          }
       }

       .modal{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 20px;
        background-color: $gray-background;
        z-index: 333;
        border-radius: $border-radius-1;

        @include flex(column, center, center, 1rem);

        .extras{
            display: flex;
            gap: 1em;
        }

        label{
            color: $black;
            @include flex(row, center, center, .2em);

            input{
                padding: 7px 14px;
                border: solid $border $black;
                background-color: $white;
                border-radius: $border-radius-1;
            }
        }

        button{
            width: 100%;
            padding: 12px;
            border: none;
            color: $white;
            background-color: $black;
            cursor: pointer;
        }
       }
    }
   </style>