<script setup>
import { faker } from "@faker-js/faker";

import GroupWindow from "../components/GroupWindow.vue";

function genNames(n) {
  let names = [];
  for (let i = 0; i < n; i++) names.push(faker.name.fullName());
  return names;
}

console.log(genNames(2));
</script>

<template>
  <div class="flex flex-wrap">
    <GroupWindow :users="genNames(4)" ></GroupWindow>
    <GroupWindow :users="genNames(5)" ></GroupWindow>
    <GroupWindow :users="genNames(4)" ></GroupWindow>
    <GroupWindow :users="genNames(5)" ></GroupWindow>
    <GroupWindow :users="genNames(5)" ></GroupWindow>
    <GroupWindow :users="genNames(4)" ></GroupWindow>
  </div>
</template>
