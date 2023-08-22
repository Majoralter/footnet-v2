import { c as create_ssr_component, e as escape, f as each } from "../../../chunks/ssr.js";
const questions = [
  {
    q: "Which player scored the fastest hat-trick in the Premier League?",
    a: [
      { ans: "Sadio Mane", isCorrect: true },
      { ans: "Cristiano Ronaldo", isCorrect: false },
      { ans: "James Ward-prowse", isCorrect: false },
      { ans: "Wayne Rooney", isCorrect: false }
    ]
  },
  {
    q: "When was the inaugural Premier League season?",
    a: [
      { ans: "1992-93", isCorrect: true },
      { ans: "1887-88", isCorrect: false },
      { ans: "2001-02", isCorrect: false },
      { ans: "1994-95", isCorrect: false }
    ]
  },
  {
    q: "With 202 clean sheets, which goalkeeper has the best record in the Premier League?",
    a: [
      { ans: "Petr Cech", isCorrect: true },
      { ans: "Alisson Becker", isCorrect: false },
      { ans: "David da Gea", isCorrect: false },
      { ans: "David James", isCorrect: false }
    ]
  },
  {
    q: "Which country has won the most World Cups?",
    a: [
      { ans: "Brazil", isCorrect: true },
      { ans: "Togo", isCorrect: false },
      { ans: "Argentina", isCorrect: false },
      { ans: "Nigeria", isCorrect: false }
    ]
  },
  {
    q: "Which Ballon d'Or-winning footballer had a galaxy named after them in 2015?",
    a: [
      { ans: "Cristiano Ronaldo", isCorrect: true },
      { ans: "Luca Modric", isCorrect: false },
      { ans: "Lionel Messi", isCorrect: false },
      { ans: "Pele", isCorrect: false }
    ]
  },
  {
    q: "Which club has won the most Champions League titles?",
    a: [
      { ans: "Real Madrid", isCorrect: true },
      { ans: "Liverpool", isCorrect: false },
      { ans: "Nottingham Forest", isCorrect: false },
      { ans: "Barcelona", isCorrect: false }
    ]
  },
  {
    q: "Who is the only player to win the Champions League with three different clubs?",
    a: [
      { ans: "Clarence Seedorf", isCorrect: true },
      { ans: "Bobby Clark", isCorrect: false },
      { ans: "Samuel Eto", isCorrect: false },
      { ans: "Zlatan Ibrahimovic", isCorrect: false }
    ]
  },
  {
    q: "Which Female Player has won the most Balon d'ors?",
    a: [
      { ans: "Alexia Putellas", isCorrect: true },
      { ans: "Sam Kerr", isCorrect: false },
      { ans: "Lauren James", isCorrect: false },
      { ans: "Sophie Turner", isCorrect: false }
    ]
  },
  {
    q: "Which country won the women's world cup in 2019?",
    a: [
      { ans: "U.S.A", isCorrect: true },
      { ans: "Japan", isCorrect: false },
      { ans: "England", isCorrect: false },
      { ans: "Mexico", isCorrect: false }
    ]
  },
  {
    q: "In video game FIFA 20, team Piemonte Calcio represents which real-life club?",
    a: [
      { ans: "Juventus", isCorrect: true },
      { ans: "Majoralter F.C", isCorrect: false },
      { ans: "Stoke City", isCorrect: false },
      { ans: "Real Madrid", isCorrect: false }
    ]
  }
];
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-1h6b8qq.svelte-1h6b8qq{padding:3rem;width:80vw;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0;margin:auto}section.svelte-1h6b8qq .quiz.svelte-1h6b8qq{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2em;width:45vw}section.svelte-1h6b8qq .quiz .question.svelte-1h6b8qq{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1em;text-align:center}section.svelte-1h6b8qq .quiz .question h1.svelte-1h6b8qq{font-size:var(--font-size-fluid-1);background:var(--gradient-1);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}section.svelte-1h6b8qq .quiz .question p.svelte-1h6b8qq{font-size:var(--font-size-fluid-1)}section.svelte-1h6b8qq .quiz .question button.svelte-1h6b8qq{width:30vw;padding:14px;cursor:pointer;background:var(--gray-2);border:none;border-radius:var(--radius-2)}section.svelte-1h6b8qq .quiz .question button.svelte-1h6b8qq:hover{outline:solid var(--border-size-1) #0033E7}section.svelte-1h6b8qq .quiz .question button.ans.svelte-1h6b8qq{color:#ffffff;background-color:var(--green-7);animation:var(--animation-shake-y)}section.svelte-1h6b8qq .quiz .question button.wrong.svelte-1h6b8qq{color:#ffffff;background-color:red;animation:var(--animation-shake-x)}section.svelte-1h6b8qq .quiz .navigation.svelte-1h6b8qq{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1em;width:100%}section.svelte-1h6b8qq .quiz .navigation button.svelte-1h6b8qq{width:50%;padding:12px 24px;background-color:var(--gray-12);color:#ffffff;border:none;cursor:pointer}section.svelte-1h6b8qq .quiz .navigation button.disabled.svelte-1h6b8qq{background:var(--gray-2);color:var(--gray-6)}@media(max-width: 825px){section.svelte-1h6b8qq .quiz.svelte-1h6b8qq{width:60vw}section.svelte-1h6b8qq .quiz .question.svelte-1h6b8qq{width:100%}section.svelte-1h6b8qq .quiz .question button.svelte-1h6b8qq{width:80%}}@media(max-width: 475px){section.svelte-1h6b8qq.svelte-1h6b8qq{padding-inline:1rem;width:90vw}section.svelte-1h6b8qq .quiz.svelte-1h6b8qq{width:100%}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let i = 0, currentQuestion = questions[0], score = 0;
  $$result.css.add(css);
  return `<section class="svelte-1h6b8qq"><header><h5 style="color: gray;">Score: ${escape(score)} / ${escape(questions.length)}</h5></header> <div class="quiz svelte-1h6b8qq"><div class="question svelte-1h6b8qq">${each(questions, (question, i2) => {
    return `${currentQuestion === question ? `<p class="svelte-1h6b8qq">Question ${escape(i2 + 1)}</p> <h1 class="svelte-1h6b8qq">${escape(question.q)}</h1> ${each(question.a, (answer, index) => {
      return `<button ${""} class="${[
        "svelte-1h6b8qq",
        " "
      ].join(" ").trim()}">${escape(answer.ans)}</button>`;
    })}` : ``}`;
  })}</div> <div class="navigation svelte-1h6b8qq"><button ${""} class="${["svelte-1h6b8qq", ""].join(" ").trim()}">Next</button> ${i === questions.length - 1 ? `<button class="svelte-1h6b8qq" data-svelte-h="svelte-1d9i1vv">Try again</button>` : ``}</div></div> </section>`;
});
export {
  Page as default
};
