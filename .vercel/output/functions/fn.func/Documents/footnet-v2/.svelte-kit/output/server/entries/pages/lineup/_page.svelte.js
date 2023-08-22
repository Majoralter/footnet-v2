import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component, f as each } from "../../../chunks/ssr.js";
import "../../../chunks/firebase.js";
import "firebase/storage";
import "firebase/auth";
const Shirt = "/_app/immutable/assets/shirt.d0710130.png";
const Player_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "section.svelte-7jqdud .player.svelte-7jqdud{color:var(--gray-12);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.2em;position:relative;cursor:pointer;position:relative}section.svelte-7jqdud .player.svelte-7jqdud:hover{scale:1.1}section.svelte-7jqdud .player h5.svelte-7jqdud{position:absolute;top:20%;color:#27233A}section.svelte-7jqdud .player img.svelte-7jqdud{height:43px;width:auto}section.svelte-7jqdud .player .yellow.svelte-7jqdud,section.svelte-7jqdud .player .red.svelte-7jqdud{position:absolute;top:0;height:10px;width:8px;border-radius:0.1px}section.svelte-7jqdud .player .yellow.svelte-7jqdud{right:3px;background-color:yellow}section.svelte-7jqdud .player .red.svelte-7jqdud{right:0;background-color:red}section.svelte-7jqdud .player .ball.svelte-7jqdud,section.svelte-7jqdud .player .boot.svelte-7jqdud{height:16px;width:auto;position:absolute}section.svelte-7jqdud .player .ball.svelte-7jqdud{left:0}section.svelte-7jqdud .player .boot.svelte-7jqdud{right:0}section.svelte-7jqdud .modal.svelte-7jqdud{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);padding:20px;background-color:var(--gray-2);z-index:333;border-radius:var(--radius-2);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1rem}section.svelte-7jqdud .modal .extras.svelte-7jqdud{display:flex;gap:1em}section.svelte-7jqdud .modal label.svelte-7jqdud{color:var(--gray-12);display:flex;flex-direction:row;align-items:center;justify-content:center;gap:0.2em}section.svelte-7jqdud .modal label input.svelte-7jqdud{padding:7px 14px;border:solid var(--border-size-1) var(--gray-12);background-color:#ffffff;border-radius:var(--radius-2)}section.svelte-7jqdud .modal button.svelte-7jqdud{width:100%;padding:12px;border:none;color:#ffffff;background-color:var(--gray-12);cursor:pointer}",
  map: null
};
const Player = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { shirt = Shirt } = $$props;
  let name = "Player", number = Math.floor(Math.random() * 48) + 1 || "#";
  if ($$props.shirt === void 0 && $$bindings.shirt && shirt !== void 0)
    $$bindings.shirt(shirt);
  $$result.css.add(css$1);
  return `<section class="svelte-7jqdud">${``} <div class="player svelte-7jqdud" role="button" tabindex="0"><img${add_attribute("src", shirt, 0)} alt="" class="svelte-7jqdud"> <h5 class="svelte-7jqdud">${escape(number)}</h5> <h4>${escape(name)}</h4> ${``} ${``} ${``} ${``}</div> </section>`;
});
const Defence = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Player, "Player").$$render($$result, {}, {}, {})}`;
});
const Mid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Player, "Player").$$render($$result, {}, {}, {})}`;
});
const Forward = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Player, "Player").$$render($$result, {}, {}, {})}`;
});
const Keeper = "/_app/immutable/assets/GK-shirt.3a2889aa.png";
const Gk = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Player, "Player").$$render($$result, { shirt: Keeper }, {}, {})}`;
});
const Pitch = "/_app/immutable/assets/pitch.e1d6fc80.png";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-1w78qpm.svelte-1w78qpm{width:70vw;margin-inline:auto;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1rem;padding:1rem}section.svelte-1w78qpm .tabs.svelte-1w78qpm{display:flex;flex-direction:row;align-items:center;justify-content:center;gap:0;white-space:nowrap}section.svelte-1w78qpm .tabs button.svelte-1w78qpm{padding:7px 14px;color:var(--gray-12);background-color:var(--gray-2);border-radius:0;cursor:pointer}section.svelte-1w78qpm .tabs button.active.svelte-1w78qpm{color:#ffffff;background:#0033E7}section.svelte-1w78qpm header.svelte-1w78qpm{display:flex;flex-direction:row;align-items:center;justify-content:center;gap:1em;flex-wrap:wrap}section.svelte-1w78qpm button.svelte-1w78qpm{padding:12px 24px;color:white;background-color:var(--gray-12);cursor:pointer;border-radius:var(--radius-2);border:none}section.svelte-1w78qpm .formation.svelte-1w78qpm{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2rem;padding:0.5rem 1rem;background-size:cover;background-position:center;background-repeat:no-repeat;border-radius:var(--radius-2);height:445px;width:390px}section.svelte-1w78qpm .formation div.svelte-1w78qpm{display:flex;gap:1.3rem;align-items:center;justify-content:center;flex-wrap:wrap}section.svelte-1w78qpm label.svelte-1w78qpm{white-space:nowrap}section.svelte-1w78qpm label input.svelte-1w78qpm{padding:7px;border-radius:var(--radius-2);border:solid var(--border-size-1) var(--gray-12);background:transparent}section.svelte-1w78qpm .images.svelte-1w78qpm{display:grid;grid-template-columns:repeat(auto-fill, minmax(300px, 1fr));gap:1em;place-items:center;width:100%;margin-top:2rem}section.svelte-1w78qpm .images img.svelte-1w78qpm{height:300px;width:auto;max-width:100%;object-fit:scale-down}@media(max-width: 475px){section.svelte-1w78qpm.svelte-1w78qpm{width:80vw}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let renderDef = 3, renderMid = 4, renderFw = 3, teamName = "Team Name", savedFormations = [], noOfFormations = 0, container, tabs = ["Create Formation", "Saved Formations"], activeTab = tabs[0];
  $$result.css.add(css);
  return `<section class="svelte-1w78qpm"><div class="tabs svelte-1w78qpm">${each(tabs, (tab, i) => {
    return `<button class="${["svelte-1w78qpm", activeTab === tab ? "active" : ""].join(" ").trim()}">${escape(tab)} ${i === 1 ? `<sup style="font-weight: bold;">${escape(noOfFormations)}</sup>` : ``} </button>`;
  })}</div> ${activeTab === tabs[0] ? `<header class="svelte-1w78qpm"><label class="svelte-1w78qpm">Select Formation
    <select><option value="3-4-3" data-svelte-h="svelte-ij33fq">3-4-3</option><option value="3-5-2" data-svelte-h="svelte-5nedzi">3-5-2</option><option value="3-6-1" data-svelte-h="svelte-2ywiq6">3-6-1</option><option value="4-2-4" data-svelte-h="svelte-z0n6na">4-2-4</option><option value="4-4-2" data-svelte-h="svelte-1663zbi">4-4-2</option><option value="4-3-3" data-svelte-h="svelte-x0xgni">4-3-3</option><option value="4-5-1" data-svelte-h="svelte-1nsjpkm">4-5-1</option><option value="5-3-2" data-svelte-h="svelte-19c3e1a">5-3-2</option><option value="5-4-1" data-svelte-h="svelte-i7jgzq">5-4-1</option></select></label> <label for="team name" class="svelte-1w78qpm">Enter team name:
        <input type="text" name="team name" class="svelte-1w78qpm"${add_attribute("value", teamName, 0)}></label></header> <h1>${escape(teamName)}</h1> <div class="formation svelte-1w78qpm" style="${"background-image: url(" + escape(Pitch, true) + ");"}"${add_attribute("this", container, 0)}><div class="forward svelte-1w78qpm">${each(Array(renderFw), (_) => {
    return `${validate_component(Forward, "Forward").$$render($$result, {}, {}, {})}`;
  })}</div> <div class="mid svelte-1w78qpm">${each(Array(renderMid), (_) => {
    return `${validate_component(Mid, "Mid").$$render($$result, {}, {}, {})}`;
  })}</div> <div class="defence svelte-1w78qpm">${each(Array(renderDef), (_) => {
    return `${validate_component(Defence, "Defence").$$render($$result, {}, {}, {})}`;
  })}</div> <div class="keeper svelte-1w78qpm">${validate_component(Gk, "Gk").$$render($$result, {}, {}, {})}</div></div> <button class="svelte-1w78qpm" data-svelte-h="svelte-1d3jqsd">Save</button>` : ``} ${activeTab === tabs[1] ? `<div class="images svelte-1w78qpm">${each(savedFormations, (formation) => {
    return `<img${add_attribute("src", formation, 0)} alt="" class="svelte-1w78qpm">`;
  })}</div>` : ``} </section>`;
});
export {
  Page as default
};
