<script setup>
import { ref } from 'vue';

const message = ref('Hello World')

const logMessage = () => {
    console.log(message.value)
}
</script>

<template>
    <h3>input event</h3>
    <p>{{ message }}</p>

    <input :value="message" @input="message = $event.target.value">
    <button @click="logMessage">Click</button>
</template>
