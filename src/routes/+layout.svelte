<script>
import "../app.scss";
import "../app.scss";
import Logo from "../logo.svelte";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "$lib/firebase/firebase"
import { authHandlers } from "../store/store";
import { onMount } from "svelte";
import { fade } from "svelte/transition";

let userIsSignedIn = false
let windowWidth,
    active = false

onMount(() =>{
    windowWidth = window.innerWidth

    window.addEventListener("resize", () =>{
        windowWidth = window.innerWidth
    })
})

onAuthStateChanged(auth, user =>{
    if(user){
        userIsSignedIn = !userIsSignedIn
    }
})


const handleLogout = async () =>{
    await authHandlers.logout()

    userIsSignedIn = !userIsSignedIn
}

const handleClick = () =>{
    active = !active
}
</script>

<nav class="desktop_nav">
    <a href="/" class="logo"><Logo></Logo></a>

    {#if windowWidth < 1500}
    <button class="menu" on:click="{handleClick}">
        {#if !active}
            Menu
            {:else}
            Close
        {/if}
    </button>
    {/if}

    {#if windowWidth > 1500}
    <ul>
        <li><span class="material-symbols-outlined">video_library</span><a href="/videos" data-sveltekit-preload-data="tap">Highlights</a></li>
        <li><span class="material-symbols-outlined">scoreboard</span><a href="/fixtures" data-sveltekit-preload-data="hover">Fixtures &amp; Results</a></li>
        <li><span class="material-symbols-outlined">trending_up</span><a href="/standings">Standings</a></li>
        <li><span class="material-symbols-outlined">groups</span><a href="/lineup">Lineup Builder</a></li>
        <li><span class="material-symbols-outlined">quiz</span><a href="/trivia">Trivia</a></li>

        {#if userIsSignedIn}
        <li><button on:click="{handleLogout}">Log out</button></li>
        
        {:else}
        <li><a href="/register">Join</a></li>
        {/if}
    </ul>
    {/if}
</nav>

{#if windowWidth < 1500}
<nav class="mobile_nav" class:active="{active}" transition:fade>
    <ul>
        <li><span class="material-symbols-outlined">video_library</span><a href="/videos" data-sveltekit-preload-data="tap" on:click={handleClick}>Highlights</a></li>
        <li><span class="material-symbols-outlined">scoreboard</span><a href="/fixtures" on:click={handleClick}>Fixtures &amp; Results</a></li>
        <li><span class="material-symbols-outlined">trending_up</span><a href="/standings" on:click={handleClick}>Standings</a></li>
        <li><span class="material-symbols-outlined">groups</span><a href="/lineup" on:click={handleClick}>Lineup Builder</a></li>
        <li><span class="material-symbols-outlined">quiz</span><a href="/trivia" on:click={handleClick}>Trivia</a></li>

        {#if userIsSignedIn}
        <li><button on:click="{handleLogout, handleClick}">Log out</button></li>
        
        {:else}
        <li><a href="/register" on:click={handleClick}>Join</a></li>
        {/if}
    </ul>
</nav>
{/if}

<main>
<slot />
</main>

<footer>
    Designed and developed by <a href="https://twitter.com/MajorAlter">Jenrola Jackson</a>
</footer>


<style lang="scss">
    .mobile_nav{
        position: absolute;
        height: 50vh;
        width: 100vw;
        right: 0;
        top: 10vh;
        z-index: 33;
        padding: 3rem 2rem;
        background-color: $gray-background;
        transform-origin: center top;
        transform: translateX(-100vw);
        @include transition-menu;

        &.active{
            transform: translateX(0)
        }

        ul{
        @include flex(column, center, flex-start, 2rem);
        width: 100%;

        li:last-of-type{
            width: 100%;
            a,button{
                width: 100%;
                @include flex(row, center, center, 0)
            }
        }
        }
    }

    nav{
        position: relative;
        padding: 1.125rem 5rem;
        @include flex(row, center, space-between, 0);
        border-bottom: solid $border $gray-border;

        .menu{
            padding: .5rem;
            background-color: $black;
            border-radius: $border-radius-1;
            color: $white;
        }

        ul{
            @include flex(row, center, center, 1.875rem);
        }

        ul:first-of-type{
            li{
                @include flex(row,center,center,.2rem);

                &:hover{
                    span{
                        animation: var(--animation-shake-y);
                    }
                }

                a{
                    color: $black;
                    font-size: $links;
                    font-weight: 400;
                    padding-inline-start: .3rem;
                    border-left: solid $border $gray-text;
                }
            }

            li:last-of-type{
                a{
                    color: $white;
                    background-color: $blue;
                    padding: 12px 24px;
                    border-radius: $border-radius-1;
                    font-weight: 700;
                    border: none;


                    &:hover{
                        opacity: .8;
                    }
                }
            }

            li{
                button{
                    padding: 12px 24px;
                    background: $black;
                    border-radius: $border-radius-1;
                    border: none;
                    color: $white;
                    cursor: pointer;

                    &:hover{
                        opacity: .9;
                    }
                }
            }
        }
    }

    main{
        position: relative;
        padding-inline: 6.125rem;
        min-height: 90vh;
    }

    footer{
        @include flex(row, center, center, 1em);
        background: var(--gradient-24);
        padding: 1rem;
        margin-top: 1vh;

        a{
            color: $black;
            text-decoration: underline;
        }
    }


    @media (max-width: 1500px){
        .desktop_nav{
            padding: 2vw;
            form{
                label{
                    input{
                        width: 7rem;
                    }
                }
            }
        }
    }

    @media (max-width: 768px){
        main{
            padding: 5vw;
        }
    }
</style>