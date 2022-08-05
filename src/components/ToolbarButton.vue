<script setup>
const props = defineProps({
  iconName: String,
  text: String,
});
</script>

<template>
  <div class="flex flex-col items-center justify-center py-2 px-4 bg-black">
    <font-awesome-icon class="text-white" :icon="['fas', iconName]" />
    <small v-if="text != ''" class="text-white">{{ text }}</small>
  </div>
</template>
