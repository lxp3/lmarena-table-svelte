<script lang="ts">
  import Leaderboard from './lib/Leaderboard.svelte';
  import { Github } from 'lucide-svelte';
</script>

<main class="min-h-screen bg-[#fafafa] py-12 px-4 md:px-8 font-sans">
  <div class="max-w-6xl mx-auto space-y-8">
    <!-- Header -->
    <div class="space-y-2">
      <div class="flex items-center justify-between">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900">Arena Overview</h1>
        <a href="https://github.com/lm-sys/FastChat" target="_blank" class="text-gray-500 hover:text-gray-900 transition-colors">
          <Github size={24} />
        </a>
      </div>
      <p class="text-gray-500 flex items-center gap-1">
        Scroll to the right to see full stats of each model 
        <span class="inline-flex items-center justify-center w-5 h-5 rounded-full border border-gray-300 text-[10px] transform rotate-[-45deg]">→</span>
      </p>
    </div>

    <!-- Legend -->
    <div class="flex items-center gap-4 text-xs font-medium">
      <div class="flex items-center gap-1.5">
        <div class="w-3 h-3 rounded bg-gold-light border border-gold/20"></div>
        <span class="text-gray-600">First Place</span>
      </div>
      <div class="flex items-center gap-1.5">
        <div class="w-3 h-3 rounded bg-silver-light border border-silver/20"></div>
        <span class="text-gray-600">Second Place</span>
      </div>
      <div class="flex items-center gap-1.5">
        <div class="w-3 h-3 rounded bg-bronze-light border border-bronze/20"></div>
        <span class="text-gray-600">Third Place</span>
      </div>
    </div>

    <!-- Leaderboard -->
    <Leaderboard />
    
    <!-- Footer/Note -->
    <p class="text-[10px] text-gray-400 text-center uppercase tracking-widest pt-8">
      Inspired by LMSYS Chatbot Arena
    </p>
  </div>
</main>

<style>
  :global(body) {
    background-color: #fafafa;
  }
</style>
