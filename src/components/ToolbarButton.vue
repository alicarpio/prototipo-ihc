<script setup>
const props = defineProps({
  iconName: String,
  text: String,
  bgColor: {
    type: String,
    default: "#000000",
  },
});
</script>

<template>
  <div
    class="flex flex-col items-center justify-center py-2 px-4 cursor-pointer"
    :style="{ backgroundColor: bgColor }"
  >
    <font-awesome-icon class="text-white text-2xl" :icon="['fas', iconName]" />
    <small v-if="text != ''" class="text-white">{{ text }}</small>
  </div>
</template>
