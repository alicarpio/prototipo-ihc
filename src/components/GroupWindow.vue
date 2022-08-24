<script setup>
import randomColor from "randomcolor";
import Button from "@/components/Button.vue";

defineProps({
  users: {
    type: Array,
    required: true,
  },
  title: String,
});

function getInitials(user) {
  const [name, lastName] = user.split(" ");
  return `${name[0]}${lastName[0]}`;
}
</script>

<template>
  <div class="flex flex-col items-center" style="width: 30%">
    <div class="text-violet-500 font-bold text-xl mb-3">{{ title }}</div>
    <div
        class="mb-10 items-center bg-stone-700 border-2  border-violet-500"
    >
      <div class="flex flex-wrap items-center justify-center p-2">
        <div
            v-for="user of users"
            :style="{ backgroundColor: randomColor() }"
            class="rounded-full text-xl p-8 m-1"
        >
          {{ getInitials(user) }}
        </div>
      </div>
      <div class="flex justify-around items-center bg-white w-full h-14">
        <Button text="Enter"/>
        <Button text="Chat"/>
        <font-awesome-icon :icon="['fas', 'fa-hand']" class="text-3xl"/>
        <div class="border-l-4 border-l-violet-500 h-full flex items-center pl-4">
          <font-awesome-icon :icon="['fas', 'fa-volume-high']" class="text-3xl"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
