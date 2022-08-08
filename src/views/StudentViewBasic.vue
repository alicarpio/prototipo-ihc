<script setup>
import { ref } from "vue";

import Toolbar from "@/components/Toolbar.vue";
import CallParticipant from "@/components/CallParticipant.vue";
import Statistics from "@/components/Statistics.vue";

const askingForHelp = ref(false);
const statisticsOpen = ref(false);
</script>

<template>
  <div class="flex flex-col h-full">
    <div class="flex flex-wrap max-h-full">
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
        id="profesor"
        v-if="askingForHelp"
        class="relative z-10 max-w-[50%]"
        username="Guido Caicedo"
      />
      <Statistics v-if="statisticsOpen" />
    </div>
    <div class="bg-stone-700 flex items-center justify-center w-full h-full">
      <Toolbar
        @statistics="statisticsOpen = !statisticsOpen"
        @help="askingForHelp = !askingForHelp"
      />
    </div>
  </div>
</template>

<style scoped>
#profesor::before {
  content: "";
  position: absolute;
  background-color: white;
  border-radius: 50%;
  opacity: 80%;
  z-index: -10;
  transform: translateY(-15%);
  animation-name: blink;
  animation-duration: 3s;
  animation-iteration-count: 5;
}

@keyframes blink {
  0% {
    width: 10rem;
    height: 10rem;
  }
  50% {
    width: 18rem;
    height: 18rem;
  }
  100% {
    width: 10rem;
    height: 10rem;
  }
}
</style>
