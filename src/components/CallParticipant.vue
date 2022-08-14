<script setup>
import randomColor from "randomcolor";

const props = defineProps({
  username: {
    type: String,
    required: true,
  },
  avatarId: String,
});

function getInitials(username) {
  const [name, lastName] = username.split(" ");
  return `${name[0]}${lastName[0]}`;
}

const initials = getInitials(props.username);
</script>

<template>
  <div
    class="flex flex-col w-full items-center justify-around p-4 bg-stone-800 border border-black"
  >
    <div
      :id="avatarId"
      :style="{ backgroundColor: randomColor() }"
      class="rounded-full p-24 text-4xl flex items-center justify-center self-center"
    >
      {{ initials }}
    </div>
    <span
      class="text-white self-start bg-stone-700 p-2 mx-2 shadow-sm shadow-black"
    >
      {{ username }}
      <font-awesome-icon
        class="text-white mx-1"
        :icon="['fas', 'microphone']"
      />
      <font-awesome-icon class="text-white" :icon="['fas', 'ellipsis']" />
    </span>
  </div>
</template>
