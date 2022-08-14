<script setup>
import ActivityBar from "@/components/ActivityBar.vue";

const users = [
  "Vilma Mendoza",
  "Alina Carpio",
  "Alexander Goussas",
  "Ruth Cueva",
];
</script>

<template>
  <div class="flex flex-col w-full h-full p-4">
    <div class="flex w-full justify-between mb-8">
      <h1>Integrant's statistics</h1>
      <font-awesome-icon
        class="text-slate-800 self-end"
        :icon="['fas', 'fa-xmark']"
      />
    </div>
    <div class="flex flex-col bg-[#E8EBFA] p-4 rounded-md">
      <font-awesome-icon
        class="text-slate-800 self-end"
        :icon="['fas', 'fa-download']"
      />
      <ActivityBar v-for="user of users" :name="user" />
    </div>
  </div>
</template>
