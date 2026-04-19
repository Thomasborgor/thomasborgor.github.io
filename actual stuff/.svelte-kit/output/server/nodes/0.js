import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.B3-07Ffw.js","_app/immutable/chunks/MR-qI6XN.js","_app/immutable/chunks/BcA44X4x.js"];
export const stylesheets = ["_app/immutable/assets/0.DWlFTjQ-.css"];
export const fonts = [];
