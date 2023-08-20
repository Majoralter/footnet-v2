<script>
import { onMount } from "svelte";

const url = 'https://free-football-soccer-videos.p.rapidapi.com/';
const options = {
	method: 'GET',
    'cache': 'force-cache',
	headers: {
		'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
		'X-RapidAPI-Host': 'free-football-soccer-videos.p.rapidapi.com'
	}
};

let videos = []

onMount(async () =>{
    const response = await fetch(url,options),
          data = await response.json()
    
    videos = [...data] 
})
</script>

<section>
    <div class="container">
        {#each videos as video}
        <div>
            <h4>{video.title}</h4>
        <a href={video.url}>
            <img src={video.thumbnail} alt="">
        </a>
    </div>
        {/each}
    </div>
</section>

<style lang="scss">
    section{
        @include flex(column, center, center, 0);
        .container{
        margin-top: 20px;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 1em;
        place-items: center;
        width: 100%;

            div{
                @include flex(column, flex-start, flex-start, .5rem);
                padding: 1rem;
                border-radius: $border-radius-1;
                background: var(--gradient-8);

                &:hover{
                    background: var(--gradient-16);
                }

                h4{
                    background: var(--gradient-28);
                    background-clip: text;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            a{
            img{
                width: 350px;
                height: auto;
                max-width: 100%;
                object-fit: cover;
                }
             }
           }
        }
    }
</style>