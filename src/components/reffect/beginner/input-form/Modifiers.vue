<script setup>
import { ref } from 'vue';

const message = ref('  Hello World  ')
const number = ref(10)

console.log(message.value)
</script>

<template>
    <h3>modifiers</h3>

    <p>{{ message }}</p>
    <div class="v-flex">
        none
        <input v-model="message">
        lazy
        <input v-model.lazy="message">
        trim
        <input v-model.trim="message">
    </div>

    <p>{{ number }}</p>
    <div class="v-flex">
        .number
        <input v-model.number="number" type="text" >
        type="number"
        <input v-model="number" type="number" >
    </div>
</template>
