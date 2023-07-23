<script setup>
const emit = defineEmits([
    'notification',
])
</script>

<template>
    <h3>$emit defineEmits func</h3>
    <button @click="emit('notification')">通知</button>
</template>
