<script setup>
import RoomStatistics from "@/components/RoomStatistics.vue"
</script>

<template>
  <div class="flex p-3 items-center justify-between text-xl bg-[#191313] text-white">
    <h3>Rooms Statistics</h3>
  </div>
  <div class="flex flex-wrap justify-around w-full p-4 bg-violet-300">
    <RoomStatistics v-for="i in 6" :room-name="`Room ${i}`" style="width: 30%"/>
  </div>

</template>