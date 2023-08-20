<script>
    import { onMount } from "svelte";

    const leagues = [
        {
        league: 'Premier League',
        Id: 'GB1'
    },
        {
        league: 'Bundesliga',
        Id: 'L1'
    },
        {
        league: 'Laliga',
        Id: 'ES1'
    },
        {
        league: 'Serie A',
        Id: 'IT1'
    },
        {
        league: 'Ligue 1',
        Id: 'FR1'
    },
        {
        league: 'Süper Lig',
        Id: 'TR1'
    },
        {
        league: 'Eredivise',
        Id: 'NL1'
    },
        {
        league: 'Liga Portugal',
        Id: 'PO1'
    },
        {
        league: 'Jupiler Pro League',
        Id: 'BE1'
    },
    ]

    let activeTab = leagues[0].league,
        leagueId = leagues[0].Id,
        date = new Date(),
        currentYear = date.getFullYear(),
        table = [],
        response,
        data

    const url = `https://transfermarket.p.rapidapi.com/competitions/get-table?id=${leagueId}&seasonID=${currentYear}&domain=de`;
    const options = {
    	method: 'GET',
        'cache': 'reload',
    	headers: {
    		'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
    		'X-RapidAPI-Host': 'transfermarket.p.rapidapi.com'
    	}
    };    

    onMount(async () => {
         response = await fetch(url,options)
              data = await response.json()
              
              table = [...data.table ]
    })

    const fetchTable = async () =>{
        leagueId = leagueId
        const url = `https://transfermarket.p.rapidapi.com/competitions/get-table?id=${leagueId}&seasonID=${currentYear}&domain=de`;
         response = await fetch(url, options)
              data = await response.json()

              table = [...data.table]
              console.log(table)
    }
</script>

<section>
    <header>
        <ul>
            {#each leagues as league}
            <li>
                <button class:active={activeTab === league.league} on:click={() => {
                    activeTab = league.league
                    leagueId = league.Id
                    fetchTable()
                }}>{league.league}</button>
            </li>
            {/each}
        </ul>
    </header>

    <table>
     <tr>
        <th>Pos</th>
        <th>Team</th>
        <th>PL</th>
        <th>W</th>
        <th>D</th>
        <th>L</th>
        <th>GD</th>
        <th>PTS</th>
     </tr>

     {#each table as details, i}
        <tr bgcolor={details.markColor}>
            <td>{i + 1}</td>
            <td class="td-1"><img src={details.clubImage} alt="">{details.clubName}</td>
            <td>{details.matches}</td>
            <td>{details.wins}</td>
            <td>{details.draw}</td>
            <td>{details.losses}</td>
            <td>{details.goalDifference}</td>
            <td>{details.points}</td>
        </tr>
     {/each}
</table>
</section>


<style lang="scss">
    section{
        width: 70vw;
        margin-inline: auto;
        @include flex(column, center, center, 1em);

        header{
            width: 100%;
            padding: 1rem;

            ul{
                @include flex(row, center, center, 1em);
                flex-wrap: wrap;

                li{
                    button{
                        padding: 7px 12px;
                        background-color: $gray-background;
                        border: none;
                        cursor: pointer;

                        &.active{
                            background-color: $blue;
                            color: $white;
                        }
                    }
                }
            }
        }

        table{
            width: 90%;
            background-color: $white;

            tr{
                th{
                    background: $black;
                    color: $white;
                }

                td{
                border: solid $border $gray-background;
                    img{
                        height: 32px;
                        width: auto;
                    }
                }

                td:not(.td-1){
                    text-align: center;
                }

                .td-1{
                    @include flex(row, center, flex-start, 1em);
                }
            }
        }
    }

    @media (max-width: 768px){
        section{
            width: 90vw;

            table{
                width: 100%;
            }
        }
    }
</style>

