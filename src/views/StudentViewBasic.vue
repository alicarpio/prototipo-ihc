<script setup>
import Toolbar from "@/components/Toolbar.vue";
import CallParticipant from "@/components/CallParticipant.vue";
</script>

<template>
  <div
    class="grid grid-cols-2 grid-rows-5 h-screen items-center justify-center place-items-center"
  >
    <CallParticipant class="row-span-2" username="Vilma Mendoza" />
    <CallParticipant class="row-span-2" username="Alina Carpio" />
    <CallParticipant class="row-span-2" username="Alexander Goussas" />
    <CallParticipant class="row-span-2" username="Ruth Cueva" />
    <div
      class="col-span-full bg-stone-700 flex items-center justify-center w-full h-full"
    >
      <Toolbar />
    </div>
  </div>
</template>
