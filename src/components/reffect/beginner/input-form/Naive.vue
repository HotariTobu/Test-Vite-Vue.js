<script setup>
const message = 'Hello World'

const logMessage = () => {
    console.log(message)
}
</script>

<template>
    <h3>naive</h3>
    <p>{{ message }}</p>

    <input v-model="message">
    <!-- <input v-model="message" value="Error"> -->
    <button @click="logMessage">Click</button>
</template>
