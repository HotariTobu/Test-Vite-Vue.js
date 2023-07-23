<script setup>
import { reactive } from 'vue';

const state = reactive({
    count: 0,
})

const addCount = () => {
    state.count++
}
</script>

<template>
    <h3>reactive</h3>
    <button @click="state.count++">count: {{ state.count }}</button>

    <h4>with func</h4>
    <button @click="addCount">count: {{ state.count }}</button>
</template>
