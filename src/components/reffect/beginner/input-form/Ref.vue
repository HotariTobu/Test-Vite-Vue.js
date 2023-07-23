<script setup>
import { ref } from 'vue';

const message = ref('Hello World')

const logMessage = () => {
    console.log(message.value)
}
</script>

<template>
    <h3>ref</h3>
    <p>{{ message }}</p>

    <input v-model="message">
    <button @click="logMessage">Click</button>
</template>
