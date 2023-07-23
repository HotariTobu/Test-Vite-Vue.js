<script setup>
import { ref, resolveDirective } from 'vue';

const users = ref([])

    ; (async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        users.value = await res.json()
    })()
</script>

<template>
    <h3>JSONPlaceholder</h3>
    <slot v-for="user in users" :key="user" :user="user"></slot>
</template>
