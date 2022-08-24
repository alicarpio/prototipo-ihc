<script setup>
import { faker } from "@faker-js/faker";

import GroupWindow from "../components/GroupWindow.vue";
import RoomHeader from "../components/RoomHeader.vue";

function genNames(n) {
  let names = [];
  for (let i = 0; i < n; i++) names.push(faker.name.fullName());
  return names;

}
</script>

<template>
  <div style="background: #3c3c3c">
    <RoomHeader />
    <div class="grid" style="grid-template-columns: 4fr 1fr">
      <div class="flex p-5 flex-wrap items-center justify-around">
        <GroupWindow title="Room 1" :users="genNames(4)"></GroupWindow>
        <GroupWindow title="Room 2" :users="genNames(5)"></GroupWindow>
        <GroupWindow title="Room 3" :users="genNames(4)"></GroupWindow>
        <GroupWindow title="Room 4" :users="genNames(5)"></GroupWindow>
        <GroupWindow title="Room 5" :users="genNames(5)"></GroupWindow>
        <GroupWindow title="Room 6" :users="genNames(4)"></GroupWindow>
      </div>
      <div class="bg-white">
        Hello
      </div>
    </div>
  </div>
</template>
<style></style>
