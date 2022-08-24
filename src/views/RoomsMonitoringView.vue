<script setup>
import {ref} from 'vue';
import {faker} from "@faker-js/faker";

import GroupWindow from "../components/GroupWindow.vue";
import RoomHeader from "../components/RoomHeader.vue";
import NotificationBox from "@/components/NotificationBox.vue";

function genNames(n) {
  let names = [];
  for (let i = 0; i < n; i++) names.push(faker.name.fullName());
  return names;

}

const bolitaClass = ref('')
setTimeout(() => bolitaClass.value = 'bolita', 3000)

</script>

<template>
  <div style="background: #3c3c3c">
    <RoomHeader/>
    <div class="grid" style="grid-template-columns: 4fr 1fr">
      <div class="flex p-5 flex-wrap items-center justify-around">
        <GroupWindow group-number="Room 1" :users="genNames(4)"></GroupWindow>
        <GroupWindow group-number="Room 2" :users="genNames(5)"></GroupWindow>
        <GroupWindow :class="bolitaClass" group-number="Room 3" :users="genNames(4)"></GroupWindow>
        <GroupWindow group-number="Room 4" :users="genNames(5)"></GroupWindow>
        <GroupWindow group-number="Room 5" :users="genNames(5)"></GroupWindow>
        <GroupWindow :class="bolitaClass" group-number="Room 6" :users="genNames(4)"></GroupWindow>
      </div>
      <div class="bg-white">
        <span class="font-bold m-5">Room Notifications</span>
        <NotificationBox title="Room 3" message="EL grupo no tiene actividad"/>
      </div>
    </div>
  </div>
</template>

<style>
.bolita::before {
  content: "";
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: red;
  opacity: 80%;
  top: 67px;
  left: 155px;
  /*right: 22.3em;*/
  /*bottom: 36em;*/
  position: relative;
  /*position: absolute;*/
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-name: blink;
}

@keyframes blink {
  0% {
    width: 0.5rem;
    height: 0.5rem;
  }
  50% {
    width: 1rem;
    height: 1rem;
  }
}
</style>
