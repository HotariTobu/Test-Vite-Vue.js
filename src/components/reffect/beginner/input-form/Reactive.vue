<script setup>
import { reactive } from 'vue';

const form = reactive({
    message: 'Hello World',
})

const logMessage = () => {
    console.log(form.message)
}
</script>

<template>
    <h3>reactive</h3>
    <p>{{ form.message }}</p>

    <input v-model="form.message">
    <button @click="logMessage">Click</button>
</template>
