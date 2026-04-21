<script lang="ts">
  import { isWheelWindowOpen } from '$lib/stores/layout';
  import { flyAndScale } from '$lib/utils/transitions';
  import { Tooltip } from 'bits-ui';
  import DraggableWindow from '../ui/DraggableWindow.svelte';
  import GameController from 'phosphor-svelte/lib/GameController';
</script>

{#if $isWheelWindowOpen}
  <DraggableWindow
    onClose={() => ($isWheelWindowOpen = false)}
    class="fixed bottom-8 right-8 w-[27.5rem]"
  >
    <svelte:fragment slot="title">
      <GameController weight="bold" class="text-xl text-slate-300" />
      <p class="text-sm font-medium text-white">Wheel Of Benevolence</p>
    </svelte:fragment>
<iframe width="410" height="460"
   src="https://academy.cs.cmu.edu/sharing/blackSnail899568/embed"> 
 </iframe>
      </DraggableWindow>
{/if}
