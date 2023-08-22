import { c as create_ssr_component, f as each, e as escape, d as add_attribute } from "../../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-usmsmh.svelte-usmsmh{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0}section.svelte-usmsmh .container.svelte-usmsmh{margin-top:20px;display:grid;grid-template-columns:repeat(auto-fill, minmax(300px, 1fr));gap:1em;place-items:center;width:100%}section.svelte-usmsmh .container div.svelte-usmsmh{display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;gap:0.5rem;padding:1rem;border-radius:var(--radius-2);background:var(--gradient-8)}section.svelte-usmsmh .container div.svelte-usmsmh:hover{background:var(--gradient-16)}section.svelte-usmsmh .container div h4.svelte-usmsmh{background:var(--gradient-28);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent}section.svelte-usmsmh .container div a img.svelte-usmsmh{width:350px;height:auto;max-width:100%;object-fit:cover}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let videos = [];
  $$result.css.add(css);
  return `<section class="svelte-usmsmh"><div class="container svelte-usmsmh">${each(videos, (video) => {
    return `<div class="svelte-usmsmh"><h4 class="svelte-usmsmh">${escape(video.title)}</h4> <a${add_attribute("href", video.url, 0)}><img${add_attribute("src", video.thumbnail, 0)} alt="" class="svelte-usmsmh"></a> </div>`;
  })}</div> </section>`;
});
export {
  Page as default
};
