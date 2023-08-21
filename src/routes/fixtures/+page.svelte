<script>
import _ from 'lodash'
import { onMount } from 'svelte';


    let date = new Date(),
    localeDate = date.toDateString(),
    items = ['Live scores', 'Results'],
    activeItem = items[0],
    groupedData,
    keys = [],
    filteredKey = [],
    filteredLeague,
    handleFilter,
    isFiltered = false,
    results



const url = 'https://sportscore1.p.rapidapi.com/sports/1/events/live?page=1',
      resultsUrl = 'https://sportscore1.p.rapidapi.com/sports/1/events?page=1'  
const options = {
method: 'GET',
'cache': 'force-cache',
headers: {
	'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
	'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
}
};  

onMount(async () =>{
  const response = await fetch(url,options),
         data = await response.json(),
         matches = data.data

    matches.sort((a,b) => a.league_id - b.league_id)
    groupedData = _.groupBy(matches, match => match.league.name)
    keys = Object.entries(groupedData)

    keys = [...keys]

    const resultsResponse = await fetch(resultsUrl, options),
          resultsData = await resultsResponse.json()
          results = resultsData.data  
          results.sort((a,b) => a.id - b.id)

        //   console.log(results)

 handleFilter = () => {
    if(filteredLeague === "All"){
        isFiltered = false
        return
    }
    isFiltered = true
    filteredKey = keys.filter(key => key.includes(filteredLeague[0]))
}
})
</script>

<section>
    <header>
        <ul>
           {#each items as item}
                <li>
                    <button on:click={() => activeItem = item} class:active={activeItem === item}>{item}</button>
                </li>
           {/each}
        </ul>
    </header>

    {#if activeItem === items[0]}
        <div class="matches">
            <label for="league-select" style="font-weight: bold;">Filter by League
            <select name="league-select" bind:value={filteredLeague} on:change={handleFilter}>
                <option value="All">All</option>
                {#each keys as games}
                    <option value={games}>
                        {games[0]}
                    </option>
                {/each}
            </select>
        </label>

        <p style="color: gray;">{localeDate}</p>

            {#if !isFiltered}
            {#each keys as games}
            <p class="league_name">{games[0]}</p>
            {#each games[1] as game}
            <div class="match_details">
                <div class="home_team">
                    <img src={game.home_team.logo} alt="">
                    <p>{game.home_team.name}</p>
                </div>

                <div class="scores_time">
                    <h6>{game.status_more}</h6>
                    <p>{game.home_score.current} - {game.away_score.current}</p>
                </div>

                <div class="away_team">
                    <img src={game.away_team.logo} alt="">
                    <p>{game.away_team.name}</p>
                </div>
            </div>
            {/each}
        {/each}

        {:else}
            <p class="league_name">{filteredKey[0][0]}</p>
            {#each filteredKey[0][1] as match}
            <div class="match_details">
                <div class="home_team">
                    <img src={match.home_team.logo} alt="">
                    <p>{match.home_team.name}</p>
                </div>

                <div class="scores_time">
                    <h6>{match.status_more}</h6>
                    <p>{match.home_score.current} - {match.away_score.current}</p>
                </div>

                <div class="away_team">
                    <img src={match.away_team.logo} alt="">
                    <p>{match.away_team.name}</p>
                </div>
            </div>
            {/each}
        {/if}
      </div>
      {/if}

      {#if activeItem === items[1]}
      <div class="results">
        {#each results as result}
        <div class="match_details">
            <div class="home_team">
                <img src={result.home_team.logo} alt="">
                <p>{result.home_team.name}</p>
            </div>

            <div class="scores_time">
                <h6>{result.status_more}</h6>
                <p>{result.home_score?.display ?? "TBD"} - {result.away_score?.display ?? "TBD"}</p>
            </div>

            <div class="away_team">
                <img src={result.away_team.logo} alt="">
                <p>{result.away_team.name}</p>
            </div>
        </div>
        {/each}
    </div>
      {/if}
</section>


<style lang="scss">
    section{
        width: 55vw;
        margin-inline: auto;
        @include flex(column, center, center, 1em);

        header{
            width: 70%;
            padding: 1rem;
            ul{
                width: 100%;
                @include flex(row, center, center, 0);

                li{
                    width: 50%;
                    button{
                        width: 100%;
                        padding: 12px 24px;
                        border: none;
                        background: $gray-background;
                        cursor: pointer;

                        &.active{
                            background-color: $blue;
                            color: $white;
                        }
                    }
                }
            }
        }
    
            .matches,.results{
                @include flex(column, flex-start, flex-start, 1rem);
                width: 100%;

                .league_name{
                    color: $black;
                    margin-top: .5rem;
                    font-weight: bold;
                    font-size: $label;
                }

                .match_details{
                @include flex(row, center, space-between, 0);
                background-color: $gray-background;
                padding-block: .5rem;
                width: 100%;

                div{
                    @include flex(column, center, center, .2rem);
                }

                .home_team,.away_team{
                    width: 40%;
                    img{
                        height: 32px;
                        width: auto;
                    }

                    p{
                        text-align: center;
                        font-size: $label;
                    }
                }

                .scores_time{
                    h6{
                        font-size: $label;
                        color: $green;
                        animation: var(--animation-blink) forwards;
                    }

                    p{
                        font-size: $body;
                        font-weight: 500;
                        color: $black;
                        white-space: nowrap;
                    }
                }
            }
            }
    }

    @media (max-width: 768px){
        section{
            width: 90vw;

            header{
                width: calc(100% + 10vw);
            }
        }
    }
</style>