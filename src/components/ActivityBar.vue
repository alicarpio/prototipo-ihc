<script setup>
import { ref } from "vue";

defineProps({
  name: String,
});

/**
 *  Get a random integer in the range [0, n).
 * @param {*} n
 */
const randInt = (n) => Math.floor(Math.random() * n + 1);

setInterval(() => {
  progress.value = randInt(100);
}, 5000);

const progress = ref(0);
</script>

<template>
  <div class="flex flex-col py-2">
    <!-- Name -->
    <div class="my-2">{{ name }}</div>
    <!-- Progress bar -->
    <div
      :style="`width: ${progress}%`"
      class="transition-all duration-1000 text-black text-center bg-yellow-500 p-1 rounded-md"
    >
      <div>{{ progress }}%</div>
    </div>
  </div>
</template>
