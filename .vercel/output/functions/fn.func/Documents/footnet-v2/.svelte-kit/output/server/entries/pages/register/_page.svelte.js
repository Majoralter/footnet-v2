import { c as create_ssr_component, d as add_attribute } from "../../../chunks/ssr.js";
import "firebase/auth";
import { a as auth } from "../../../chunks/firebase.js";
import "firebase/storage";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".auth_container.svelte-9prtm9.svelte-9prtm9{min-height:85vh;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.5rem}.auth_container.svelte-9prtm9 form.svelte-9prtm9{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1rem;padding:0.3rem 1rem;height:60vh;width:30vw;background-image:var(--gradient-23), var(--noise-1);filter:var(--noise-filter-1);background-size:cover;border-radius:var(--radius-2);border:solid var(--border-size-1) var(--gray-3)}.auth_container.svelte-9prtm9 form h1.svelte-9prtm9{color:#ffffff;font-size:2.5rem}.auth_container.svelte-9prtm9 form label.svelte-9prtm9{display:flex;flex-direction:row;align-items:center;justify-content:center;gap:0;width:100%;background-color:#ffffff;height:10%;border-radius:var(--radius-2);padding:0.5rem}.auth_container.svelte-9prtm9 form label.svelte-9prtm9:focus-within{border:solid var(--border-size-1) var(--gray-12);background:var(--gray-3)}.auth_container.svelte-9prtm9 form label input.svelte-9prtm9{width:100%;height:100%;border:none;background:transparent}.auth_container.svelte-9prtm9 form label input.svelte-9prtm9:focus{outline:none;background:transparent}.auth_container.svelte-9prtm9 form label input.svelte-9prtm9::placeholder{color:var(--gray-12)}.auth_container.svelte-9prtm9 form button.svelte-9prtm9{width:95%;padding-block:12px;border:none;border-radius:var(--radius-2);background:var(--gradient-3);font-size:var(--font-size-1);color:var(--gray-12);font-weight:500;cursor:pointer}.auth_container.svelte-9prtm9 form button.svelte-9prtm9:hover{scale:1.01}.auth_container.svelte-9prtm9 form button span.svelte-9prtm9{animation:var(--animation-spin)}.auth_container.svelte-9prtm9 form p.svelte-9prtm9{color:var(--gray-6);font-weight:lighter;font-size:var(--font-size-0)}.auth_container.svelte-9prtm9 form p span.svelte-9prtm9{color:#ffffff;cursor:pointer}@media(max-width: 960px){.auth_container.svelte-9prtm9 form.svelte-9prtm9{width:50vw}}@media(max-width: 600px){.auth_container.svelte-9prtm9.svelte-9prtm9{width:100%}.auth_container.svelte-9prtm9 form.svelte-9prtm9{width:100%}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "", password = "", confirmPassword = "", user = auth.currentUser;
  console.log(user);
  $$result.css.add(css);
  return `<div class="auth_container svelte-9prtm9"><form autocomplete="off" class="svelte-9prtm9"><h1 class="svelte-9prtm9">${`Create Account`}</h1> <label class="svelte-9prtm9"><input type="email" placeholder="Enter your email" class="svelte-9prtm9"${add_attribute("value", email, 0)}></label> <label class="svelte-9prtm9"><input type="password" placeholder="Enter your password" class="svelte-9prtm9"${add_attribute("value", password, 0)}></label> ${`<label class="svelte-9prtm9"><input type="password" placeholder="Confirm password" class="svelte-9prtm9"${add_attribute("value", confirmPassword, 0)}></label>`} <button type="button" class="svelte-9prtm9">${`Sign Up`}</button> <p class="svelte-9prtm9">${`Already have an account?`} <span role="button" tabindex="0" class="svelte-9prtm9">${`Login`}</span></p></form> </div>`;
});
export {
  Page as default
};
