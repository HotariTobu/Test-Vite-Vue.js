<script setup>
import { ref } from 'vue';

const state = ref({
    count: 0,
})

const addCount = () => {
    state.value.count++
}
</script>

<template>
    <h3>ref object</h3>
    <button @click="state.count++">count: {{ state.count }}</button>

    <h4>with func</h4>
    <button @click="addCount">count: {{ state.count }}</button>
</template>
