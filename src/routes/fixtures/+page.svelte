<script>
import _ from 'lodash'
export let data

let matches = data.result,
        date = new Date(),
        localeDate = date.toDateString()

matches.sort((a,b) => a.league_id - b.league_id)
const groupedData = _.groupBy(matches, match => match.league.name)
const keys = Object.entries(groupedData)
</script>

<section class="live_scores">
    <div class="aside_header">
        <h2><span class="material-symbols-outlined">adjust</span> Live Matches</h2>
        <p>{localeDate}</p>    
        </div>

        <div class="matches">
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
      </div>
</section>


<style lang="scss">
    section{
        width: 70%;
        .aside_header{
                width: 100%;
                @include flex(row, center, space-between, 0);

                h2{
                    font-size: $body;
                    @include flex(row, center, center, .1rem);

                    span{
                        color: $green;
                    }
                }

                p{
                    font-size: $sub-body;
                    color: $gray-text;
                }
            }

            .matches{
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
                    }
                }
            }
            }
    }
</style>