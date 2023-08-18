<script>
import { onMount } from "svelte";

const url = 'https://free-football-soccer-videos.p.rapidapi.com/';
const options = {
	method: 'GET',
    'cache': 'force-cache',
	headers: {
		'X-RapidAPI-Key': '7305ec08b8mshf4e8a44ddfe4721p19cadbjsn09c955a677d1',
		'X-RapidAPI-Host': 'free-football-soccer-videos.p.rapidapi.com'
	}
};

let videos = []

onMount(async () =>{
    const response = await fetch(url,options),
          data = await response.json()
    
    videos = [...data] 
    
    console.log(videos)

})
</script>

<section>
    <div>
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
        div{
        margin-top: 20px;
        display: grid;
        grid-template-columns: repeat(3,1fr);
        column-gap: 20px;
        place-items: center;

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
                object-fit: cover;
                }
             }
           }
        }
    }
</style>