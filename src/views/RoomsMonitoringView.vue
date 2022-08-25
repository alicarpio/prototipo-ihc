<script setup>
import {ref} from 'vue';

import GroupWindow from "../components/GroupWindow.vue";
import RoomHeader from "../components/RoomHeader.vue";
import NotificationBox from "@/components/NotificationBox.vue";
import {genNames, timeNotification} from "@/util.js";


const bolitaClass = ref('')
setTimeout(() => bolitaClass.value = 'bolita', 3000)

const chatOpen = ref(false);

timeNotification()

</script>

<template>
  <div style="background: #3c3c3c">
    <RoomHeader/>
    <div class="grid" style="grid-template-columns: 4fr 1fr">
      <div class="flex p-5 flex-wrap items-center justify-around">
        <GroupWindow v-for="i in 6"
                     @chat-open="chatOpen = !chatOpen"
                     :group-number="`Room ${i}`"
                     :class="[i === 3 || i === 6 ? bolitaClass : '']"
                     :users="genNames(i % 2 === 0 ? 4 : 5)"
        />
      </div>
      <div class="bg-white">
        <div v-if="chatOpen">
          <div class="bg-slate-400 p-2 m-5">
            <div class="flex justify-around">
              <span class="text-black font-bold mr-16 ">Chat Room</span>
              <font-awesome-icon class="text-gray-500 text-xs" icon="fa-solid fa-x" @click="chatOpen = !chatOpen" />

            </div>
            <NotificationBox title="Henry Segovia" message="¿Cuál era la pregunta 5?"/>
            <NotificationBox title="Helen Gomez" message="Estoy de acuerdo pero deberiamos"/>
            <div class="flex flex-col bg-[#B8B3E9] p-5 m-5 rounded-md">
              <div class="text-xs text-slate-500">{{timeNotification()}}</div>
              <img alt="imagen documento pdf" src="/documentopdf.png"/>
            </div>
            <div class="flex flex-col bg-[#B8B3E9] p-5 m-5 rounded-md">
              <div class="text-xs text-slate-500">{{timeNotification()}}</div>
              <img alt="imagen documento pdf" src="/ejerciciomate.png"/>
            </div>
          </div>
        </div>
        <div v-else>
          <span class="font-bold m-5">Room Notifications</span>
          <NotificationBox v-show="bolitaClass !== ''" title="Room 3" message="EL grupo no tiene actividad"/>
          <NotificationBox v-show="bolitaClass !== ''" title="Room 6" message="EL grupo no tiene actividad"/>
        </div>
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
