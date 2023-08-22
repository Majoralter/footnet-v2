

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/fixtures/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.9235f71c.js","_app/immutable/chunks/scheduler.078f3ca2.js","_app/immutable/chunks/index.d9f0be7e.js","_app/immutable/chunks/each.e59479a4.js"];
export const stylesheets = ["_app/immutable/assets/3.024fe67a.css"];
export const fonts = [];
