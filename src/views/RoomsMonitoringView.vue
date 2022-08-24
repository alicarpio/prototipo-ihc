<script setup>
import { faker } from "@faker-js/faker";

import GroupWindow from "../components/GroupWindow.vue";
import RoomHeader from "../components/RoomHeader.vue";

function genNames(n) {
  let names = [];
  for (let i = 0; i < n; i++) names.push(faker.name.fullName());
  return names;

const iconsname = ["chart-line","phone"];
}

console.log(genNames(2));
</script>

<template>
  <div style="background: #3c3c3c">
    <RoomHeader  iconName="chart-line" text="Statistics"/>
    <div class="flex p-5 flex-wrap items-center justify-center">
      <GroupWindow :users="genNames(4)"></GroupWindow>
      <GroupWindow :users="genNames(5)"></GroupWindow>
      <GroupWindow :users="genNames(4)"></GroupWindow>
      <GroupWindow :users="genNames(5)"></GroupWindow>
      <GroupWindow :users="genNames(5)"></GroupWindow>
      <GroupWindow :users="genNames(4)"></GroupWindow>
    </div>
  </div>
</template>
<style></style>
