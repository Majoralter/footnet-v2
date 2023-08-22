

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/trivia/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.d8127e2d.js","_app/immutable/chunks/scheduler.078f3ca2.js","_app/immutable/chunks/index.d9f0be7e.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/index.1ea6f061.js"];
export const stylesheets = ["_app/immutable/assets/7.582866a5.css"];
export const fonts = [];
