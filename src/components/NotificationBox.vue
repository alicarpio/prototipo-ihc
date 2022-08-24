<script setup>

const props = defineProps({
  title: String,
  message: String
});

function timeNotification(){
  let today = new Date();
  let time = today.getHours() + ":" + today.getMinutes();
}
</script>

<template>
  <div class="flex flex-col bg-[#B8B3E9] p-5 m-5 rounded-md">
    <span class="font-bold">{{title}}</span>
    <span>{{message}}</span>
  </div>

</template>