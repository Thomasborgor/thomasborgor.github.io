import { writable } from 'svelte/store';
export const isDevWindowOpen = writable<boolean>(false);
export const isGameSettingsOpen = writable<boolean>(false);
export const isAdWindowOpen = writable<boolean>(true);
export const isLiveStatsOpen = writable<boolean>(false);
export const isWheelWindowOpen = writable<boolean>(false);
