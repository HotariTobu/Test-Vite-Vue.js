<script setup>
defineEmits([
    'notification',
])
</script>

<template>
    <h3>$emit defineEmits two</h3>
    <button @click="$emit('notification')">通知</button>
</template>
