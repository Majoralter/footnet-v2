<script>
    import Shirt from "$lib/shirt.png"
    import Boot from "$lib/soccer-boot.png"
    import Ball from "$lib/football.png"
    import { fade } from "svelte/transition";
   
    export let shirt = Shirt

   let active = false,
    name = "Player",
    number= Math.floor(Math.random() * 48) + 1 | "#",
    checkedYellow = false,
    checkedRed = false,
    checkedGoal = false,
    checkedAssist = false,
    isYellow = false,
    isRed = false,
    isGoal = false,
    isAssist = false
    

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
            Y:<input type="checkbox" on:change={() => {
                isYellow = !isYellow
                checkedYellow = !checkedYellow
            }} bind:checked={checkedYellow}>
        </label>
        <label>
            R:<input type="checkbox" on:change={() => {
                isRed = !isRed
                checkedRed = !checkedRed
                }} bind:checked={checkedRed}>
        </label>
        <label>
            G:<input type="checkbox" on:change={() => {
                isGoal = !isGoal
                checkedGoal = !checkedGoal
                }} bind:checked={checkedGoal}>
        </label>
        <label>
            A:<input type="checkbox" on:change={() => {
                isAssist = !isAssist
                checkedAssist = !checkedAssist
            }} bind:checked={checkedAssist}>
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

    {#if isGoal}
    <img src={Ball} alt="" class="ball">
    {/if}

    {#if isAssist}
    <img src={Boot} alt="" class="boot">
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
            height: 10px;
            width: 8px;
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

          .ball,.boot{
            height: 16px;
            width: auto;
            position: absolute;
          }

          .ball{
            left: 0;
          }

          .boot{
            right: 0;
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