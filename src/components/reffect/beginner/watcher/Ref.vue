<script setup>
import { ref, watch } from 'vue';

const count = ref(0)

watch(count, newValue => {
    console.log('count:', newValue)
})

watch(count, (newValue, oldValue) => {
    console.log('count:', oldValue, '->', newValue)
})
</script>

<template>
    <h3>ref</h3>
    <button @click="count++">count: {{ count }}</button>
</template>
