<script setup>
import { ref } from "vue";

import Toolbar from "@/components/Toolbar.vue";
import CallParticipant from "@/components/CallParticipant.vue";
import Statistics from "@/components/Statistics.vue";

const askingForHelp = ref(false);
const statisticsOpen = ref(false);
</script>

<template>
  <div
    class="grid grid-rows-5 grid-cols-2 h-screen items-center justify-center place-items-center"
    :class="{
      'grid-cols-6': askingForHelp,
      'grid-cols-8': statisticsOpen,
    }"
  >
    <CallParticipant
      class="row-span-2"
      :class="{ 'col-span-2': askingForHelp, 'col-span-3': statisticsOpen }"
      username="Vilma Mendoza"
    />
    <CallParticipant
      class="row-span-2"
      :class="{ 'col-span-2': askingForHelp, 'col-span-3': statisticsOpen }"
      username="Alina Carpio"
    />
    <CallParticipant
      class="row-span-2"
      :class="{ 'col-span-2': askingForHelp, 'col-span-3': statisticsOpen }"
      username="Alexander Goussas"
    />
    <CallParticipant
      class="row-span-2"
      :class="{ 'col-span-3': askingForHelp || statisticsOpen }"
      username="Ruth Cueva"
    />
    <CallParticipant
      id="profesor"
      v-if="askingForHelp"
      class="row-span-2 relative col-span-3 z-10"
      username="Guido Caicedo"
    />
    <Statistics
      v-if="statisticsOpen"
      class="col-start-7 col-span-2 row-start-1 row-span-2"
    />
    <div
      class="col-span-full bg-stone-700 flex items-center justify-center w-full h-full"
    >
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
