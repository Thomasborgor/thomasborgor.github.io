import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.BVW3s76M.js","_app/immutable/chunks/g7twk5qm.js","_app/immutable/chunks/CjReXE5W.js"];
export const stylesheets = ["_app/immutable/assets/0.DiKhkQZB.css"];
export const fonts = [];
