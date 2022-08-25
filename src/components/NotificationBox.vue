<script setup>

import {timeNotification} from "@/util";

defineProps({
  title: String,
  message: String
});

timeNotification()
</script>

<template>
  <div class="flex flex-col bg-[#B8B3E9] p-3 m-5 rounded-md">
    <div class="text-xs text-slate-500">{{timeNotification()}}</div>
    <span class="font-bold ">{{title}}</span>
    <span>{{message}}</span>
  </div>

</template>