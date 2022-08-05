<script setup>
const props = defineProps({
    username: {
        type: String,
        required: true,
    }
})

function getInitials(username) {
    const [name, lastName] = username.split(" ");
    return `${name[0]}${lastName[0]}`
}

const initials = getInitials(props.username)
</script>

<template>
    <div class="flex flex-col w-full items-center p-4 bg-stone-800">
        <div class="rounded-full p-12 text-2xl flex items-center justify-center bg-amber-100">
            {{ initials}}
        </div>
        <span class="text-white self-start">
            {{ username}}
            <font-awesome-icon class="text-white" :icon="['fas', 'microphone']" />
        </span>
    </div>
</template>
