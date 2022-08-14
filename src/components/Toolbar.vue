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
    <ToolbarButton iconName="microphone" text="Microphone" bgColor="#292524" />
    <ToolbarButton iconName="arrow-up-from-bracket" text="Share" bgColor="#292524" />
    <ToolbarButton
      @click="$emit('statistics', $event)"
      iconName="chart-line"
      bgColor="#292524"
      text="Statistics"
    />
    <ToolbarButton iconName="ellipsis" bgColor="#292524" />
    <ToolbarButton iconName="hand" text="" />
    <ToolbarButton iconName="comment" text="Chat" />
    <ToolbarButton iconName="user-group" text="Participants" />
    <ToolbarButton
      @click="$emit('help', $event)"
      iconName="question"
      text="Help"
    />
    <ToolbarButton iconName="phone" style="background-color: red" />
  </div>
</template>
