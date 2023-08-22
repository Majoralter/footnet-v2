

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/videos/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.70befe10.js","_app/immutable/chunks/scheduler.078f3ca2.js","_app/immutable/chunks/index.d9f0be7e.js","_app/immutable/chunks/each.e59479a4.js"];
export const stylesheets = ["_app/immutable/assets/8.a3cbf6ab.css"];
export const fonts = [];
