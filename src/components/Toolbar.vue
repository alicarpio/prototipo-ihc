<script setup>
import ToolbarButton from "@/components/ToolbarButton.vue";

defineProps({
  time: {
    type: String,
    default: "15.29",
  },
});
</script>

<template>
  <div class="flex">
    <span
      class="text-white bg-stone-800 flex items-center justify-center border-r px-2 border-black"
      >{{ time }}</span
    >
    <ToolbarButton iconName="video" text="Camera" bgColor="#292524" />
    <ToolbarButton iconName="microphone" bgColor="#292524" />
    <ToolbarButton iconName="share" bgColor="#292524" />
    <ToolbarButton
      @click="$emit('statistics', $event)"
      iconName="chart-line"
      bgColor="#292524"
    />
    <ToolbarButton iconName="ellipsis" bgColor="#292524" />
    <ToolbarButton iconName="hand" />
    <ToolbarButton iconName="comment" />
    <ToolbarButton iconName="user-group" />
    <ToolbarButton
      @click="$emit('help', $event)"
      iconName="question"
      text="help"
    />
    <ToolbarButton iconName="phone" style="background-color: red" />
  </div>
</template>
