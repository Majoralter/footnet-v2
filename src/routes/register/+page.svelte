<script>
    import { authHandlers } from "../../store/store"
    import { auth } from "$lib/firebase/firebase"

    let register = true,
        authenticating = false,
        email = "",
        password = "",
        confirmPassword = "",
        user = auth.currentUser

        console.log(user)

    const handleAuth = async () =>{
        authenticating = true
    
        if(!email || !password || (register && !confirmPassword)){
            alert("Check your Details!")
            return
        }

        try {
            if(!register){
                if(user){
                    alert(`Already signed in as ${user.email}`)
                }
                 await authHandlers.login(email, password);
                  window.location.href = "/"
                }
            else {
                if(user) {
                    alert(`Already signed in as ${user.email}`)
                    return
                }

                await authHandlers.signUp(email, password);
                 window.location.href = "/"

            }

        } catch (error) {
            alert(error.message)
        }

        if(authenticating) return

        authenticating = false
    }

    const handleRegister = () =>{
        register = !register
    }
</script>

<div class="auth_container">
    <form autocomplete="off">
        <h1>
            {#if register}
            Create Account
            {:else}
            Welcome Back
            {/if}
        </h1>
        <label>
            <input type="email" placeholder="Enter your email" bind:value={email}>
        </label>
        <label>
            <input type="password" placeholder="Enter your password" bind:value={password}>
        </label>

        {#if register}
        <label>
            <input type="password" placeholder="Confirm password" bind:value={confirmPassword}>
        </label>
        {/if}
        <button on:click={handleAuth} type="button">
            {#if register && !authenticating}
                Sign Up
            {:else if !register && !authenticating}
            Login
            {:else if authenticating}
            <span class="material-symbols-outlined">hourglass_top</span>
            {/if}
        </button>

        <p>
            {#if register}
            Already have an account?

            {:else}
            Don't have an account?
            {/if}
            <span on:click={handleRegister} on:keydown={() => {}} role="button" tabindex="0">
                {#if register}
                Login
                {:else}
                Join
                {/if}
            </span>
        </p>
    </form>
</div>


<style lang="scss">
    .auth_container{
        min-height: 85vh;
        @include flex(column, center, center, .5rem);
        form{
            @include flex(column, center, center, 1rem);
            padding: .3rem 1rem;
            height: 60vh;
            width: 30vw;
            background-image: var(--gradient-23), var(--noise-1);
            filter: var(--noise-filter-1);
            background-size: cover;
            border-radius: $border-radius-1;
            border: solid $border $gray-border;

            h1{
                color: $white;
                font-size: 2.5rem;
            }

            label{
                @include flex(row, center, center, 0);
                width: 100%;
                background-color: $white;
                height: 10%;
                border-radius: $border-radius-1;
                padding: .5rem;

                &:focus-within{
                    border: solid $border $black;
                    background: $gray-border;
                }

                input{
                    width: 100%;
                    height: 100%;
                    border: none;
                    background: transparent;


                    &:focus{
                        outline: none;
                        background: transparent;
                    }

                    &::placeholder{
                        color: $black;
                    }
                }
            }

            button{
                width: 95%;
                padding-block: 12px;
                border: none;
                border-radius: $border-radius-1;
                background: var(--gradient-3);
                font-size: $sub-body;
                color: $black;
                font-weight: 500;
                cursor: pointer;

                &:hover{
                    scale: 1.01;
                }

                span{
                    animation: var(--animation-spin);
                }
            }

            p{
                color: $gray-text;
                font-weight: lighter;
                font-size: $label;

                span{
                    color: $white;
                    cursor: pointer;
                }
            }
        }
    }

    @media (max-width: 960px){
        .auth_container{
            form{
                width: 50vw;
            }
        }
    }

    @media (max-width: 600px){
        .auth_container{
            width: 100%;
            form{
                width: 100%;
            }
        }
    }
</style>