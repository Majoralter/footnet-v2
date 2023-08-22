import { c as create_ssr_component, d as add_attribute, f as each, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { onAuthStateChanged } from "firebase/auth";
import { a as auth } from "../../chunks/firebase.js";
const News_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "section.svelte-12lal4x.svelte-12lal4x{display:flex;flex-direction:column;align-items:flex-end;justify-content:center;gap:1rem;height:fit-content}section.svelte-12lal4x .header.svelte-12lal4x{width:100%}section.svelte-12lal4x .header h3.svelte-12lal4x{color:var(--gray-12);font-size:var(--font-size-fluid-1)}section.svelte-12lal4x swiper-container.svelte-12lal4x{height:45vh;width:100%;float:right;padding:0.5rem;padding-inline-end:0;border-radius:var(--radius-2);background:var(--gradient-24)}section.svelte-12lal4x swiper-container swiper-slide.svelte-12lal4x{display:flex;flex-direction:row;align-items:center;justify-content:center;gap:1rem;height:100%;color:var(--gray-12)}section.svelte-12lal4x swiper-container swiper-slide:hover img.svelte-12lal4x{scale:1.01}section.svelte-12lal4x swiper-container swiper-slide img.svelte-12lal4x{max-width:50%;min-height:100%;height:auto;object-fit:cover;border-radius:var(--radius-2)}section.svelte-12lal4x swiper-container swiper-slide div.svelte-12lal4x{display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;gap:1rem}section.svelte-12lal4x swiper-container swiper-slide div h1.svelte-12lal4x{font-size:var(--font-size-fluid-1);color:#ffffff;line-height:var(--font-lineheight-0)}section.svelte-12lal4x swiper-container swiper-slide div a.svelte-12lal4x{padding:12px 24px;color:#ffffff;font-size:var(--font-size-fluid-0);background:var(--gradient-8);border-radius:var(--radius-2)}section.svelte-12lal4x .top_stories.svelte-12lal4x,section.svelte-12lal4x .articles.svelte-12lal4x{height:fit-content;background:var(--gradient-23)}section.svelte-12lal4x .top_stories swiper-slide.svelte-12lal4x,section.svelte-12lal4x .articles swiper-slide.svelte-12lal4x{height:100%}section.svelte-12lal4x .top_stories swiper-slide div h1.svelte-12lal4x,section.svelte-12lal4x .articles swiper-slide div h1.svelte-12lal4x{font-size:var(--font-size-1)}section.svelte-12lal4x .top_stories swiper-slide div a.svelte-12lal4x,section.svelte-12lal4x .articles swiper-slide div a.svelte-12lal4x{font-size:var(--font-size-0)}section.svelte-12lal4x .articles.svelte-12lal4x{background:var(--gradient-8)}section.svelte-12lal4x .articles swiper-slide.svelte-12lal4x{margin-bottom:1rem;padding:0.2rem}section.svelte-12lal4x .articles swiper-slide div.svelte-12lal4x{gap:0.5rem}section.svelte-12lal4x .articles swiper-slide div a.svelte-12lal4x{padding:12px;background:var(--gradient-10)}@media(max-width: 960px){section.svelte-12lal4x swiper-container swiper-slide div a.svelte-12lal4x{padding:0.5rem}section.svelte-12lal4x .articles swiper-slide div h1.svelte-12lal4x,section.svelte-12lal4x .top_stories swiper-slide div h1.svelte-12lal4x{font-size:var(--font-size-fluid-0)}section.svelte-12lal4x .articles swiper-slide div a.svelte-12lal4x,section.svelte-12lal4x .top_stories swiper-slide div a.svelte-12lal4x{padding:0.5rem}section.svelte-12lal4x .first_swiper swiper-slide.svelte-12lal4x{flex-direction:column;justify-content:center;padding:0}section.svelte-12lal4x .first_swiper swiper-slide img.svelte-12lal4x{min-width:90%;min-height:50%}}",
  map: null
};
const News = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let featuredArticles = [], topStories = [], footballArticles = [];
  $$result.css.add(css$1);
  return `<section class="svelte-12lal4x">${!featuredArticles || !topStories || !footballArticles ? `<span class="material-symbols-outlined" data-svelte-h="svelte-1em2bph">hourglass_top</span>` : `<div class="header svelte-12lal4x" data-svelte-h="svelte-19n4b1h"><h3 class="svelte-12lal4x">Featured</h3></div> <swiper-container${add_attribute("slides-per-view", 1, 0)} space-between="30" grab-cursor="true" speed="400" autoplay-delay="2500" autoplay-disable-on-interaction="false" class="first_swiper svelte-12lal4x">${each(featuredArticles, (feature) => {
    return `<swiper-slide class="svelte-12lal4x"><img${add_attribute("src", feature.mainMedia[0].original.url, 0)} alt="" class="svelte-12lal4x"> <div class="svelte-12lal4x"><h1 class="svelte-12lal4x">${escape(feature.title)}</h1> <a${add_attribute("href", feature.url, 0)} class="svelte-12lal4x">Read More</a></div> </swiper-slide>`;
  })}</swiper-container> <div class="header svelte-12lal4x" data-svelte-h="svelte-97gvvv"><h3 class="svelte-12lal4x">Top stories</h3></div> <swiper-container class="top_stories svelte-12lal4x" space-between="30"${add_attribute("slides-per-view", 1, 0)} grid-rows="2" grid-fill="row" grab-cursor="true">${each(topStories, (story) => {
    return `<swiper-slide class="svelte-12lal4x"><img${add_attribute("src", story.mainMedia[0].original.url, 0)} alt="" class="svelte-12lal4x"> <div class="svelte-12lal4x"><h1 class="svelte-12lal4x">${escape(story.title)}</h1> <a${add_attribute("href", story.url, 0)} class="svelte-12lal4x">Read More</a></div> </swiper-slide>`;
  })}</swiper-container> <div class="header svelte-12lal4x" data-svelte-h="svelte-x6oset"><h3 class="svelte-12lal4x">More news</h3></div> <swiper-container class="articles svelte-12lal4x" grid-rows="3"${add_attribute("slides-per-view", 1, 0)} grid-fill="row" grab-cursor="true" space-between="20" autoplay-delay="3000" autoplay-disable-on-interaction="false">${each(footballArticles, (article) => {
    return `<swiper-slide class="svelte-12lal4x"><img${add_attribute("src", article.mainMedia[0].original.url, 0)} alt="" class="svelte-12lal4x"> <div class="svelte-12lal4x"><h1 class="svelte-12lal4x">${escape(article.title)}</h1> <a${add_attribute("href", article.url, 0)} class="svelte-12lal4x">Read More</a></div> </swiper-slide>`;
  })}</swiper-container>`} </section>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".modal.svelte-vdw572.svelte-vdw572{display:flex;flex-direction:row;align-items:center;justify-content:center;gap:1rem;position:absolute;top:0;left:50%;z-index:2;background-color:var(--gray-12);padding:1rem;color:#ffffff;border-radius:var(--radius-2);transform:translate(-50%, -100vh);white-space:nowrap}.modal.active.svelte-vdw572.svelte-vdw572{transform:translate(-50%, -50%)}.modal.svelte-vdw572 span.svelte-vdw572{cursor:pointer}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let showModal = false, userEmail;
  onAuthStateChanged(auth, (user) => {
    if (user) {
      userEmail = user.email;
      setTimeout(
        () => {
          showModal = true;
        },
        1e3
      );
    }
  });
  $$result.css.add(css);
  return `<div class="${["modal svelte-vdw572", showModal ? "active" : ""].join(" ").trim()}">Hello ${escape(userEmail)}! 🎉
    <span class="material-symbols-outlined svelte-vdw572" role="button" tabindex="0" data-svelte-h="svelte-tbjupi">close</span></div> <div class="main_container">${validate_component(News, "News").$$render($$result, {}, {}, {})} </div>`;
});
export {
  Page as default
};
