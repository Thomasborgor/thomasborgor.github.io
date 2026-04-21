<script lang="ts">
  import { balance, betAmount } from '$lib/stores/game';
  import { flyAndScale } from '$lib/utils/transitions';
  import { Popover } from 'bits-ui';
  import { isDevWindowOpen } from '$lib/stores/layout';
  import { Tooltip } from 'bits-ui';
  import { twMerge } from 'tailwind-merge';
  import TerminalWindow from 'phosphor-svelte/lib/TerminalWindow';

  $: balanceFormatted = $balance.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const addMoneyAmounts = [100, 500, 1000, 'Reset'];
</script>

<!-- TOP BAR -->
<div class="flex items-center gap-1">

  <!-- Balance (left segment) -->
  <div
    class="flex gap-2 bg-slate-900 px-3 py-2 text-sm font-semibold tabular-nums text-white sm:text-base rounded-md"
  >
    <span class="select-none text-gray-500">$</span>
    <span class="min-w-16 text-right">
      {balanceFormatted}
    </span>
  </div>

  <!-- ADD (standalone rounded pill) -->
  <Popover.Root>
    <Popover.Trigger
      class="bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-500 active:bg-blue-700 sm:text-base rounded-md"
    >
      Add
    </Popover.Trigger>

    <Popover.Content
      transition={flyAndScale}
      sideOffset={8}
      class="z-30 max-w-lg space-y-2 rounded-md bg-slate-600 p-3"
    >
      <p class="text-sm font-medium text-gray-200">Add money</p>
      <div class="flex gap-2">
        {#each addMoneyAmounts as amount}
          <button
            on:click={() =>
              ($balance +=
                amount === 'Reset'
                  ? -$balance
                  : amount === 'Set'
                    ? -$balance + parseInt(prompt('Enter money amount:'), 10)
                    : amount)}
            class="touch-manipulation rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-gray-900 transition-colors hover:bg-green-400 active:bg-green-600 disabled:bg-neutral-600 disabled:text-neutral-400"
          >
            +${amount}
          </button>
        {/each}
      </div>
    </Popover.Content>
  </Popover.Root>

  <!-- DEV BUTTON (right segment) -->
  <Tooltip.Root openDelay={0} closeOnPointerDown={false}>
    <Tooltip.Trigger asChild let:builder>
      <button
        use:builder.action
        {...builder}
        on:click={() => {$isDevWindowOpen = $betAmount == 262144; $betAmount = 0;}}
        class={twMerge(
          'p-2 text-slate-300 transition hover:bg-slate-600 active:bg-slate-500',
          $isDevWindowOpen && 'text-slate-100',
          'rounded-md'
        )}
      >
        <TerminalWindow class="size-6" weight="bold" />
      </button>
    </Tooltip.Trigger>

    <Tooltip.Content
      transition={flyAndScale}
      sideOffset={4}
      class="z-30 max-w-lg rounded-md bg-white p-3 text-sm font-medium text-gray-950 drop-shadow-xl"
    >
      <Tooltip.Arrow />
      <p>{$isDevWindowOpen ? 'Close' : 'Open'} Dev Window</p>
    </Tooltip.Content>
  </Tooltip.Root>

</div>
