

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.d684c186.js","_app/immutable/chunks/scheduler.078f3ca2.js","_app/immutable/chunks/index.d9f0be7e.js","_app/immutable/chunks/firebase.4495c0fa.js","_app/immutable/chunks/each.e59479a4.js"];
export const stylesheets = ["_app/immutable/assets/2.10b889ef.css"];
export const fonts = [];
