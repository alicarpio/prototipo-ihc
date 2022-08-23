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
    class="flex flex-col items-center m-2 p-4 bg-stone-700 border-8 border-violet-500"
  >
    <div class="flex flex-wrap w-full items-center justify-center">
      <div
        v-for="user of users"
        :style="{ backgroundColor: randomColor() }"
        :class="{ 'p-10': users.length === 5, 'p-12': users.length === 4 }"
        class="rounded-full m-2 text-2xl"
      >
        {{ getInitials(user) }}
      </div>
    </div>
    <div class="flex bg-white w-full p-2">
      <button>Enter</button> <button>Chat</button>
      <font-awesome-icon :icon="['fas', 'fa-volume-high']" />
    </div>
  </div>
</template>
