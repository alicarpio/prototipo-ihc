<script setup>
import ToolbarButton from '@/components/ToolbarButton.vue'
</script>

<template>
    <div class="flex">
        <ToolbarButton iconName="video" text="Camera" />
        <ToolbarButton iconName="microphone" />
        <ToolbarButton iconName="share" />
        <ToolbarButton iconName="chart-line" />
        <ToolbarButton iconName="ellipsis" />
        <ToolbarButton iconName="comment" />
        <ToolbarButton iconName="user-group" />
        <ToolbarButton iconName="question" text="help" />
        <ToolbarButton iconName="phone" class="text-app-red" />
    </div>
</template>
