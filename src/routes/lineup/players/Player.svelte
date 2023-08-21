<script>
    import Shirt from "$lib/shirt.png"
    import { fade } from "svelte/transition";
   
    export let shirt = Shirt

   let active = false,
    name = "Player",
    number= Math.floor(Math.random() * 48) + 1 || "#"
    

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

     <button on:click={showInput}>Confirm</button>
    </div>
    {/if}
 
    <div in:fade class="player" on:click={showInput} on:keydown={() => {}} role='button' tabindex="0">
    <img src={shirt} alt="">
    <h5>{number}</h5>
    <h4>{name}</h4>
    </div>
   </section>
   
   <style lang="scss">
    section{
        .player{
          color: $black;
          @include flex(column, center, center, .2em);
          position: relative;
          cursor: pointer;

          &:hover{
            scale: 1.1;
          }

          h5{
            position: absolute;
            top: 20%;
          }

          h4{
            color: #27233A;
          }
   
          img{
           height: 43px;
           width: auto;
          }
       }

       .modal{
        position: absolute;
        top: -20%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 20px;
        background-color: $gray-background;
        z-index: 333;
        border-radius: $border-radius-1;

        @include flex(column, center, center, 1rem);

        label{
            color: $black;

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