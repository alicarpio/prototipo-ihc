<script setup>
import {RouterLink} from 'vue-router';

const linkClass = [
    "bg-slate-800", "text-white", "p-4", "rounded-md", "m-2",
    "hover:bg-slate-700", "shadow shadow-black"
]
</script>

<template>
    <div class="h-screen flex flex-col items-center justify-center">
        <RouterLink :class="linkClass" to="/profesores">Demo Profesores</RouterLink>
        <RouterLink :class="linkClass" to="/estudiantes">Demo Estudiantes</RouterLink>
    </div>
</template>
