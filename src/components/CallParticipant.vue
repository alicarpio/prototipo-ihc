<script setup>
import randomColor from "randomcolor";

const props = defineProps({
  username: {
    type: String,
    required: true,
  },
});

function getInitials(username) {
  const [name, lastName] = username.split(" ");
  return `${name[0]}${lastName[0]}`;
}

const initials = getInitials(props.username);
</script>

<template>
  <div
    class="flex flex-col w-full h-full items-center justify-center p-4 bg-stone-800 border border-black"
  >
    <div
      :style="{ backgroundColor: randomColor() }"
      class="rounded-full p-12 text-2xl flex items-center justify-center"
    >
      {{ initials }}
    </div>
    <span class="text-white self-start">
      {{ username }}
      <font-awesome-icon class="text-white" :icon="['fas', 'microphone']" />
    </span>
  </div>
</template>
