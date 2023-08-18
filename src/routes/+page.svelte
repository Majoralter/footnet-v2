<script>
    import { onAuthStateChanged } from "firebase/auth";
    import { auth } from "$lib/firebase/firebase"
    import News from "../components/Homepage/News.svelte";

    let showModal = false,
        userEmail

    onAuthStateChanged(auth, user =>{
            if(user){
                 userEmail = user.email;
                  
                setTimeout(() =>{
                    showModal = true;
                }, 1000) 
            }
    })

    const closeModal = () =>{
        showModal = !showModal
    }
</script>


<div class="modal" class:active={showModal}>
    Hello {userEmail}! 🎉
    <span class="material-symbols-outlined" on:click={closeModal} on:keydown={() => {}} role="button" tabindex="0">
        close
    </span>
</div>



<div class="main_container">
    <News />
</div>


<style lang="scss">
    .modal{
        @include flex(row, center, center, 1rem);
        position: absolute;
        top: 0;
        left: 50%;
        z-index: 2;
        background-color: $black;
        padding: 1rem;
        color: $white;
        border-radius: $border-radius-1;
        transform: translate(-50%, -100vh);
        white-space: nowrap;

        &.active{
            transform: translate(-50%, -50%);
        }

        span{
            cursor: pointer;
        }
    }
</style>