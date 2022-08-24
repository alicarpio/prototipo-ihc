<script setup>
import randomColor from "randomcolor";

const props = defineProps({
  users: {
    type: [String],
    required: true,
  },
});

function getInitials(user) {
  const [name, lastName] = user.split(" ");
  return `${name[0]}${lastName[0]}`;
}
</script>

<template>
  <div
    style="width: 30%"
    class="flex flex-col items-center m-6 bg-stone-700 border-8 border-violet-500"
  >
    <div class="flex flex-wrap w-full items-center justify-center">
      <div
        v-for="user of users"
        :style="{ backgroundColor: randomColor() }"
        class="rounded-full m-2 text-2xl p-10"
      >
        {{ getInitials(user) }}
      </div>
    </div>
    <div class="flex justify-around items-center bg-white w-full h-16">
      <button
        type="button"
        class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-lg px-8 py-2 mb-1 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
      >
        Enter
      </button>
      <button
        type="button"
        class="focus:outline-none0 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-lg px-9 py-2 mb-1 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
      >
        Chat
      </button>
      <font-awesome-icon :icon="['fas', 'fa-hand']" class="text-4xl" />
      <div class="border-l-4 border-l-violet-500 h-full flex items-center pl-6">
        <font-awesome-icon :icon="['fas', 'fa-volume-high']" class="text-4xl" />
      </div>
    </div>
  </div>
</template>

<style></style>
