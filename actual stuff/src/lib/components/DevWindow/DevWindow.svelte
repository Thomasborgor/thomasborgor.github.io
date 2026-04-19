<script lang="ts">
  import { totalProfitHistory, winRecords } from '$lib/stores/game';
  import { isDevWindowOpen } from '$lib/stores/layout';
  import { flyAndScale } from '$lib/utils/transitions';
  import { Tooltip, Button } from 'bits-ui';
  import TerminalWindow from 'phosphor-svelte/lib/TerminalWindow';
  import DraggableWindow from '../ui/DraggableWindow.svelte';
  import {bounciness, riskLevel, rowCount} from '$lib/stores/game';
  import {runtimePayouts, autoBetIntervalMs} from '$lib/constants/game';

</script>

{#if $isDevWindowOpen}
  <DraggableWindow
  onClose={() => ($isDevWindowOpen = false)}
  class="fixed bottom-8 right-8 w-[20rem]"
>
  <svelte:fragment slot="title">
    <TerminalWindow weight="bold" class="text-xl text-slate-300" />
    <p class="text-sm font-medium text-white">Dev Console</p>
  </svelte:fragment>

  <!-- ADD THIS WRAPPER -->
  <div class="flex flex-col gap-2 p-2">

    <Button.Root
      class="rounded-lg bg-dark text-background shadow-mini hover:bg-dark/95 inline-flex h-12 bg-white items-center justify-center px-[21px] text-[15px] font-semibold active:scale-[0.98] active:transition-all"
      on:click={() => $bounciness = parseFloat(prompt("Enter bounciness:"), 10)}
    >
      Bounciness
    </Button.Root>

    <Button.Root
      class="rounded-lg bg-white text-black shadow-mini hover:bg-dark/95 inline-flex h-12 items-center justify-center px-[21px] text-[15px] font-semibold active:scale-[0.98] active:transition-all"
      on:click={() => {
        const binInput = prompt("Enter bin to change:");
        if (binInput === null) return;

        const bin = parseInt(binInput);
        if (isNaN(bin)) return;

        const valueInput = prompt("Enter new payout:");
        if (valueInput === null) return;

        const value = parseFloat(valueInput);
        if (isNaN(value)) return;

        runtimePayouts.update(p => {
          const copy = structuredClone(p);
          copy[$rowCount][$riskLevel][bin] = value;
          return copy;
        });
      }}
    >
      Alter bins
    </Button.Root>

    <Button.Root
      class="rounded-lg bg-white text-black shadow-mini hover:bg-dark/95 inline-flex h-12 items-center justify-center px-[21px] text-[15px] font-semibold active:scale-[0.98] active:transition-all"
      on:click={() => {$autoBetIntervalMs = parseInt(prompt("Autobet interval ms:"))}}
    >
      Autobet rate
    </Button.Root>

  </div>
</DraggableWindow>
{/if}
