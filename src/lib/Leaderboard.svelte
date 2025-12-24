<script lang="ts">
  import { ChevronUp, ChevronDown, Search, ArrowRight } from 'lucide-svelte';
  import { type ModelData, leaderboardData } from './data';

  let data = leaderboardData;
  let sortKey = 'rank';
  let sortAsc = true;

  function handleSort(key: string) {
    if (sortKey === key) {
      sortAsc = !sortAsc;
    } else {
      sortKey = key;
      sortAsc = true;
    }
    
    data = [...data].sort((a, b) => {
      const valA = a[key as keyof ModelData] as number;
      const valB = b[key as keyof ModelData] as number;
      return sortAsc ? valA - valB : valB - valA;
    });
  }

  function getRankClass(rank: number) {
    if (rank === 1) return 'bg-gold-light';
    if (rank === 2) return 'bg-silver-light';
    if (rank === 3) return 'bg-bronze-light';
    return '';
  }

  const columns = [
    { key: 'name', label: 'Model', align: 'left' },
    { key: 'overall', label: 'Overall', align: 'center' },
    { key: 'expert', label: 'Expert', align: 'center' },
    { key: 'hard', label: 'Hard Prompts', align: 'center' },
    { key: 'coding', label: 'Coding', align: 'center' },
    { key: 'math', label: 'Math', align: 'center' },
    { key: 'creative', label: 'Creative Writing', align: 'center' },
    { key: 'instruction', label: 'Instruction Following', align: 'center' },
    { key: 'longer', label: 'Longer Query', align: 'center' },
  ];
</script>

<div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden w-full max-w-6xl mx-auto">
  <!-- Table Container with Horizontal Scroll -->
  <div class="overflow-x-auto relative scrollbar-hide">
    <table class="w-full border-collapse text-sm text-gray-800">
      <thead>
        <tr class="border-b border-gray-100">
          {#each columns as col}
            <th 
              class="py-4 px-6 font-medium text-gray-500 whitespace-nowrap cursor-pointer hover:text-gray-900 transition-colors
                {col.key === 'name' ? 'sticky left-0 bg-white z-20 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)]' : ''}
                {col.align === 'center' ? 'text-center' : 'text-left'}"
              on:click={() => handleSort(col.key)}
            >
              <div class="flex items-center gap-1 {col.align === 'center' ? 'justify-center' : 'justify-start'}">
                {#if col.key === 'name'}
                  <Search size={14} class="mr-1 text-gray-400" />
                {/if}
                {col.label}
                {#if sortKey === col.key}
                  {sortAsc ? '↑' : '↓'}
                {:else if col.key !== 'name'}
                  <span class="opacity-20 flex flex-col text-[8px] leading-[4px]">
                    <ChevronUp size={8} />
                    <ChevronDown size={8} />
                  </span>
                {/if}
              </div>
            </th>
          {/each}
        </tr>
      </thead>
      <tbody>
        {#each data as row}
          <tr class="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors">
            {#each columns as col}
              <td 
                class="py-3 px-6 whitespace-nowrap
                  {col.key === 'name' ? 'sticky left-0 bg-white z-10 font-medium shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)]' : ''}
                  {col.align === 'center' ? 'text-center' : 'text-left'}
                  {col.key !== 'name' ? getRankClass(row[col.key as keyof ModelData] as number) : ''}"
              >
                {#if col.key === 'name'}
                  <div class="flex items-center gap-2">
                    <div class="w-5 h-5 rounded bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-400">
                      {row.name.charAt(0).toUpperCase()}
                    </div>
                    {row.name}
                  </div>
                {:else}
                  {row[col.key as keyof ModelData]}
                {/if}
              </td>
            {/each}
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>

<style>
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
</style>
