<script setup>
import Toolbar from '@/components/Toolbar.vue'
import CallParticipant from '@/components/CallParticipant.vue'
</script>


<template>
    <div class="grid grid-cols-2 grid-rows-3 items-center justify-center place-items-center">
        <CallParticipant username="Vilma Mendoza" />
        <CallParticipant username="Alina Carpio" />
        <CallParticipant username="Alexander Goussas" />
        <CallParticipant username="Ruth Cueva" />
        <Toolbar class="col-span-full" />
    </div>
</template>
