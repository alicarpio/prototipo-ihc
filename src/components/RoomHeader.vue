<script setup>
defineProps({
  iconName: String,
  text: String,
  bgColor: {
    type: String,
    default: "#000000",
  },
  title: {
    type: String,
    default: "Rooms Monitoring",
  },
});
</script>

<template>
  <header class="flex p-5 justify-between text-xl">
    <h3>{{ title }}</h3>
    <div class="flex ">
      <font-awesome-icon class="text-white text-4xl mx-10" :icon="['fas', iconName]" />
      <div class="flex bg-red-800 py-2 px-12">
        Leave
        <!-- <font-awesome-icon class="text-white text-2xl" :icon="['fas', iconName]" /> -->
      </div>
    </div>
    <!-- <nav class="bg-white border-gray-200 px-4 lg:px-6 py-8 dark:bg-gray-800"></nav> -->
  </header>
</template>

<style>
header {
  background-color: #191313;
  color: #ffffff;
}
</style>
