<script setup>
const emit = defineEmits([
    'notification',
])

const sendNotification = () => {
    emit('notification')
}
</script>

<template>
    <h3>$emit defineEmits func func</h3>
    <button @click="sendNotification">通知</button>
</template>
