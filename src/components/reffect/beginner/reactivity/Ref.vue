<script setup>
import { ref } from 'vue';

const count = ref(0)
console.log('count', count)
console.log('count.value', count.value)

const addCount = () => {
    count.value++;
}
</script>

<template>
    <h3>ref</h3>
    <button @click="count++">count: {{ count }}</button>

    <h4>with func</h4>
    <button @click="addCount">count: {{ count }}</button>
</template>
