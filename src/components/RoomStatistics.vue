<script setup>
import randomColor from "randomcolor";
import {genNames, randInt} from "@/util.js";

defineProps({
  roomName: String
});

const users = Array.from(genNames(randInt(4, 5)));
const numIntegrants = users.length;
</script>

<template>
  <div class="bg-white border-black border-2 shadow-xl p-4  mb-10 mt-10 mx-0.5 ">
    <div class="flex justify-between pb-4">
      <div class="text-xl">{{ roomName }}</div>
      <font-awesome-icon icon="fa-solid fa-download" class="text-xl"/>
    </div>
    <div class="flex items-center border-4 rounded-[9px] border-black w-16">
      <font-awesome-icon icon="fa-solid fa-user-group text-md"/>
      <div class="border-l-2 border-l-black text-md ml-3">
        <span class="ml-1.5">{{ numIntegrants }}</span>
      </div>
    </div>
    <div class="w-full bg-black h-1 my-2"></div>
    <div class="flex flex-wrap justify-center items-center ">
      <div v-for="username of users" class="flex items-center p-2">
        <div :style="{'background-color': randomColor()}" class="h-3 w-3 mx-2"></div>
        <span>{{ username }}</span>
      </div>
    </div>
    <div class="w-full flex items-center justify-center">
      <img
          width="15"
          height="15"
          class="w-1/2"
          alt="texto alternativo para personas que no pueden ver"
          :src="numIntegrants === 5 ? '/pie-chart-five.png' : '/pie-chart-4.svg'"
      />
    </div>
  </div>

</template>