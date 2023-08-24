<script>
    import { questions } from "./quiz"
    import { fade } from "svelte/transition"


        questions.forEach(question =>{
        question.a.sort(() => Math.random() - 0.5)
        })

    let i = 0,
        currentQuestion = questions[0],
        disabled = false,
        isCorrect = false,
        isWrong = false,
        clickedAns = 0,
        disableAnswers = false,
        score = 0,
        isLast = false
        

        const nextQues = () =>{
            isCorrect = false
            isWrong = false
            disableAnswers = false
            if(i < questions.length && i !== questions.length) i++

            if(i === questions.length - 1) disabled = true
            currentQuestion = questions[i]
        }
</script>


<section>
{#if !isLast}
<div class="quiz" in:fade>
<div class="question">
{#each questions as question, i}
{#if currentQuestion === question}
<p>Question {i + 1}</p>
<h1 in:fade>{question.q}</h1>

{#each question.a as answer, index}
    <button class:ans={(isCorrect && clickedAns === index) || (disableAnswers && answer.isCorrect)} class:wrong={isWrong && clickedAns === index} disabled={disableAnswers} on:click={() =>{
        disableAnswers = true
        clickedAns = index
        answer.isCorrect ? isCorrect = true : isWrong = true
        answer.isCorrect ? score++ : ''
        currentQuestion === questions[questions.length - 1] ? setTimeout(() => isLast = true, 1200) : isLast = false
        }}>{answer.ans}</button>
{/each}
{/if}
{/each}
</div>  

<div class="navigation">
<button on:click={nextQues} disabled={disabled} class:disabled={disabled}>Next</button>
</div>
</div>

{:else}
<div class="result" in:fade>
<h1>You scored {score} out of {questions.length}!</h1>

    <button on:click={() =>{
        setTimeout(() =>{
            score = 0
            disabled = false
            disableAnswers = false
            isCorrect = false
            isWrong = false
            isLast = false
            i = 0
            currentQuestion = questions[i]
        }, 100)
    }}>Try again</button>
 </div>
{/if}
</section>

<style lang="scss">
    section{
        padding: 3rem;
        width: 80vw;
        @include flex(column, center, center, 0);
        margin: auto;

        .result{
            @include flex(column, center, center, 1em);
            width: 30vw;

            button{
                width: 50%;
                padding: 12px 24px;
                background-color: $black;
                color: $white;
                border: none;
                cursor: pointer;
            }
        }

        .quiz{
        @include flex(column, center, center, 2em);
        width: 45vw;

            .question{
                 @include flex(column, center, center, 1em);
                 text-align: center;
                 
                 h1{
                    font-size: $body;
                    background: var(--gradient-1);
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                 }

                 p{
                    font-size: $body;
                 }

                 button{
                    width: 30vw;
                    padding: 14px;
                    cursor: pointer;
                    background: $gray-background;
                    border: none;
                    border-radius: $border-radius-1;

                    &:hover{
                        outline: solid $border $blue;
                    }

                    &.ans{
                        color: $white;
                        background-color: $green;
                        animation: var(--animation-shake-y);
                    }

                    &.wrong{
                        color: $white;
                        background-color: red;
                        animation: var(--animation-shake-x);
                    }
                 }
            }

        .navigation{
            @include flex(column,center,center,1em);
            width: 100%;

            button{
                width: 50%;
                padding: 12px 24px;
                background-color: $black;
                color: $white;
                border: none;
                cursor: pointer;

                &.disabled{
                    background: $gray-background;
                    color: $gray-text;
                }
            }
        }
        }
    }

    @media (max-width: 825px){
        section{
            .quiz{
                width: 60vw;

                .question{
                    width: 100%;

                    button{
                        width: 80%;
                    }
                }
            }
        }
    }

    @media (max-width: 475px){
        section{
            padding-inline: 1rem;
            width: 90vw;
            .quiz{
                width: 100%;
            }
        }
    }
</style>