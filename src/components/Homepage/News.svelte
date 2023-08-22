<script>
import { onMount } from "svelte";

const url = 'https://livescore6.p.rapidapi.com/news/v2/list';
const options = {
method: 'GET',
'cache': 'force-cache',
headers: {
	'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
	'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
}
}

let featuredArticles = [],
    topStories = [],
    homepageArticles = [],
    footballArticles = [],
    windowWidth 

onMount(async () =>{
    const response = await fetch(url,options)
    const data = await response.json()
    featuredArticles = [...data.featuredArticles]
    topStories = [...data.topStories]
    homepageArticles = [...data.homepageArticles]
    footballArticles = [...homepageArticles[0].articles]

    windowWidth = window.innerWidth

    window.addEventListener('resize', () =>{
        windowWidth = window.innerWidth
    })
})

</script>

<section>
    {#if !featuredArticles || !topStories || !footballArticles}
    <span class="material-symbols-outlined">hourglass_top</span>
    {:else}
    <div class="header"><h3>Featured</h3></div>
        <swiper-container 
         slides-per-view={windowWidth >= 960 ? 2 : 1}
         space-between="30" 
         grab-cursor="true" 
         speed="400"
         autoplay-delay="2500"
         autoplay-disable-on-interaction="false"
         class="first_swiper"
         >
            {#each featuredArticles as feature}
            <swiper-slide> 
               <img src={feature.mainMedia[0].original.url} alt="" loading="lazy">

               <div>
                <h1>{feature.title}</h1>
                <a href={feature.url}>Read More</a>
               </div>
            </swiper-slide>
            {/each}
        </swiper-container>

        <div class="header"><h3>Top stories</h3></div>

        <swiper-container class="top_stories"  
        space-between="30" 
        slides-per-view={windowWidth >= 960 ? 2 : 1}
        grid-rows="2"
        grid-fill="row"
        grab-cursor="true"
        >
            {#each topStories as story}
                <swiper-slide>
                    <img src={story.mainMedia[0].original.url} alt="" loading="lazy">

                    <div>
                     <h1>{story.title}</h1>
                     <a href={story.url}>Read More</a>
                    </div>
                </swiper-slide>
            {/each}
        </swiper-container>

    <div class="header"><h3>More news</h3></div>

        <swiper-container class="articles" 
        grid-rows="3" 
        slides-per-view={windowWidth >= 960 ? 2 : 1}
        grid-fill="row" 
        grab-cursor="true"
        space-between="20"
        autoplay-delay="3000"
        autoplay-disable-on-interaction="false"
        >
            {#each footballArticles as article}
            <swiper-slide>
                <img src={article.mainMedia[0].original.url} alt="" loading="lazy">

                <div>
                 <h1>{article.title}</h1>
                 <a href={article.url}>Read More</a>
                </div>
            </swiper-slide>
            {/each}
        </swiper-container>
        {/if}
</section>


<style lang="scss">
    section{
        @include flex(column, flex-end, center, 1rem);
        height: fit-content;

        .header{
            width: 100%;

            h3{
                color: $black;
                font-size: $body;
            }
        }

        swiper-container{
            height: 45vh;
            width: 100%;
            float: right;
            padding: .5rem;
            padding-inline-end: 0;
            border-radius: $border-radius-1;
            background: var(--gradient-24);

            swiper-slide{
                @include flex(row, center, center, 1rem);
                height: 100%;
                color: $black;

                &:hover{
                    img{
                        scale: 1.01;
                    }
                }

                img{
                    max-width: 50%;
                    min-height: 100%;
                    height: auto;
                    object-fit: cover;
                    border-radius: $border-radius-1;
                }

                div{
                    @include flex(column, flex-start, flex-start, 1rem);
                    h1{
                        font-size: $body;
                        color: $white;
                        line-height: var(--font-lineheight-0);
                    }

                    a{
                        padding: 12px 24px;
                        color: $white;
                        font-size: $links;
                        background: var(--gradient-8);
                        border-radius: $border-radius-1;
                    }
                }
            }
        }

        .top_stories,.articles{
            height: fit-content;
            background: var(--gradient-23);

            swiper-slide{
                height: 100%;

                div{
                    h1{
                        font-size: $sub-body;
                    }

                    a{
                        font-size: $label;
                    }
                }
            }
        }

        .articles{
            background: var(--gradient-8);
            swiper-slide{
                margin-bottom: 1rem;
                padding: .2rem;

                div{
                    gap: .5rem;

                    a{
                        padding: 12px;
                        background: var(--gradient-10);
                    }
                }
            }
        }
    }

    @media (max-width: 960px){
        section{
            swiper-container{
                swiper-slide{
                 div{
                    a{
                        padding: .5rem;
                    }
                 }
                }
            }

            .articles,.top_stories{
                swiper-slide{
                    div{
                        h1{
                    font-size: $links;
                    }

                    a{
                        padding: .5rem;
                    }
                    }
                }
            }

            .first_swiper{
                swiper-slide{
                    flex-direction: column;
                    justify-content: center;
                    padding: 0;

                    img{
                        min-width: 90%;
                        min-height: 50%;
                    }
                }
            }
        }
    }
</style>