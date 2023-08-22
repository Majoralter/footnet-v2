import { c as create_ssr_component, f as each, e as escape, d as add_attribute } from "../../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-fsevr4.svelte-fsevr4{width:70vw;margin-inline:auto;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1em}section.svelte-fsevr4 header.svelte-fsevr4{width:100%;padding:1rem}section.svelte-fsevr4 header ul.svelte-fsevr4{display:flex;flex-direction:row;align-items:center;justify-content:center;gap:1em;flex-wrap:wrap}section.svelte-fsevr4 header ul li button.svelte-fsevr4{padding:7px 12px;background-color:var(--gray-2);border:none;cursor:pointer}section.svelte-fsevr4 header ul li button.active.svelte-fsevr4{background-color:#0033E7;color:#ffffff}section.svelte-fsevr4 table.svelte-fsevr4{width:90%;background-color:#ffffff}section.svelte-fsevr4 table tr th.svelte-fsevr4{background:var(--gray-12);color:#ffffff}section.svelte-fsevr4 table tr td.svelte-fsevr4{border:solid var(--border-size-1) var(--gray-2)}section.svelte-fsevr4 table tr td img.svelte-fsevr4{height:32px;width:auto}section.svelte-fsevr4 table tr td.svelte-fsevr4:not(.td-1){text-align:center}section.svelte-fsevr4 table tr .td-1.svelte-fsevr4{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;gap:1em}@media(max-width: 768px){section.svelte-fsevr4.svelte-fsevr4{width:90vw}section.svelte-fsevr4 table.svelte-fsevr4{width:100%}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const leagues = [
    { league: "Premier League", Id: "GB1" },
    { league: "Bundesliga", Id: "L1" },
    { league: "Laliga", Id: "ES1" },
    { league: "Serie A", Id: "IT1" },
    { league: "Ligue 1", Id: "FR1" },
    { league: "Süper Lig", Id: "TR1" },
    { league: "Eredivise", Id: "NL1" },
    { league: "Liga Portugal", Id: "PO1" },
    { league: "Jupiler Pro League", Id: "BE1" }
  ];
  let activeTab = leagues[0].league;
  leagues[0].Id;
  let date = /* @__PURE__ */ new Date();
  date.getFullYear();
  let table = [];
  $$result.css.add(css);
  return `<section class="svelte-fsevr4"><header class="svelte-fsevr4"><ul class="svelte-fsevr4">${each(leagues, (league) => {
    return `<li><button class="${["svelte-fsevr4", activeTab === league.league ? "active" : ""].join(" ").trim()}">${escape(league.league)}</button> </li>`;
  })}</ul></header> <table class="svelte-fsevr4"><tr data-svelte-h="svelte-19w3nza"><th class="svelte-fsevr4">Pos</th> <th class="svelte-fsevr4">Team</th> <th class="svelte-fsevr4">PL</th> <th class="svelte-fsevr4">W</th> <th class="svelte-fsevr4">D</th> <th class="svelte-fsevr4">L</th> <th class="svelte-fsevr4">GD</th> <th class="svelte-fsevr4">PTS</th></tr> ${each(table, (details, i) => {
    return `<tr${add_attribute("bgcolor", details.markColor, 0)}><td class="svelte-fsevr4">${escape(i + 1)}</td> <td class="td-1 svelte-fsevr4"><img${add_attribute("src", details.clubImage, 0)} alt="" class="svelte-fsevr4">${escape(details.clubName)}</td> <td class="svelte-fsevr4">${escape(details.matches)}</td> <td class="svelte-fsevr4">${escape(details.wins)}</td> <td class="svelte-fsevr4">${escape(details.draw)}</td> <td class="svelte-fsevr4">${escape(details.losses)}</td> <td class="svelte-fsevr4">${escape(details.goalDifference)}</td> <td class="svelte-fsevr4">${escape(details.points)}</td> </tr>`;
  })}</table> </section>`;
});
export {
  Page as default
};
