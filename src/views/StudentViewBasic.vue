<script setup>
import { ref } from "vue";

import Toolbar from "@/components/Toolbar.vue";
import CallParticipant from "@/components/CallParticipant.vue";
import Statistics from "@/views/Statistics.vue";

const askingForHelp = ref(false);
const statisticsOpen = ref(false);
</script>

<template>
  <div class="h-screen grid" style="grid-template-rows: 4fr 1fr">
    <div
      :class="{ grid: statisticsOpen }"
      style="grid-template-columns: 4fr 1fr"
    >
      <div class="flex flex-wrap">
        <CallParticipant
          class="max-w-[50%]"
          :class="{ 'w-1/3': askingForHelp }"
          username="Vilma Mendoza"
        />
        <CallParticipant
          class="max-w-[50%]"
          :class="{ 'w-1/3': askingForHelp }"
          username="Alina Carpio"
        />
        <CallParticipant
          class="max-w-[50%]"
          :class="{ 'w-1/3': askingForHelp }"
          username="Alexander Goussas"
        />
        <CallParticipant class="max-w-[50%]" username="Ruth Cueva" />
        <CallParticipant
          v-if="askingForHelp"
          class="relative z-10 max-w-[50%]"
          username="Guido Caicedo"
          avatarId="profesor"
        />
      </div>
      <Statistics v-if="statisticsOpen" />
    </div>
    <div class="bg-stone-700 flex items-center justify-center">
      <Toolbar
        @statistics="statisticsOpen = !statisticsOpen"
        @help="askingForHelp = !askingForHelp"
      />
    </div>
  </div>
</template>

<style>
#profesor::before {
  content: "";
  position: absolute;
  background-color: white;
  border-radius: 50%;
  opacity: 80%;
  z-index: -10;
  animation-name: blink;
  animation-duration: 1s;
  animation-iteration-count: 5;
}

@keyframes blink {
  0% {
    width: 14rem;
    height: 14rem;
  }
  50% {
    width: 16rem;
    height: 16rem;
  }
  100% {
    width: 14rem;
    height: 14rem;
  }
}
</style>
