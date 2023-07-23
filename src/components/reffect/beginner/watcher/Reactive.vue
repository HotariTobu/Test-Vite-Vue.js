<script setup>
import { reactive, watch } from 'vue';

const state = reactive({
    count: 0,
})

watch(
    () => state.count,
    newValue => {
        console.log('count:', newValue)
    }
)

watch(
    () => state.count,
    (newValue, oldValue) => {
        console.log('count:', oldValue, '->', newValue)
    }
)
</script>

<template>
    <h3>reactive</h3>
    <button @click="state.count++">count: {{ state.count }}</button>
</template>
