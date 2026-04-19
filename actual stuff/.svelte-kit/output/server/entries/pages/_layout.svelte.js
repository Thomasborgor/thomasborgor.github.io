import { c as create_ssr_component, a as add_attribute } from "../../chunks/ssr.js";
const ogImage = "/_app/immutable/assets/og_image.PzHn9Bxz.jpg";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-f88f7m_START -->${$$result.title = `<title>Free Plinko Game Online - Play &amp; Win Instant Rewards</title>`, ""}<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=""><link rel="canonical" href="https://plinko-game-online.github.io/"><link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&amp;display=swap" rel="stylesheet"><meta name="description" content="Experience authentic Plinko gameplay online! Drop discs through pegs for exciting rewards in this classic arcade game. No download or registration required - start playing instantly and win."><meta property="og:type" content="website"><meta property="og:title" content="Free Plinko Game Online"><meta property="og:url" content="https://plinko-game-online.github.io/"><meta property="og:image"${add_attribute("content", ogImage, 0)}><meta name="google-site-verification" content="lTwaQTJ2H6vMNYMUd9ooaLxzvssiGoQEuoRdsOYNX8g"><!-- HEAD_svelte-f88f7m_END -->`, ""} ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
