

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.8312df9f.js","_app/immutable/chunks/scheduler.078f3ca2.js","_app/immutable/chunks/index.d9f0be7e.js","_app/immutable/chunks/singletons.4e9ed283.js"];
export const stylesheets = [];
export const fonts = [];
