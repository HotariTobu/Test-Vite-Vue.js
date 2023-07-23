<script setup>
import { reactive, watch } from 'vue';

const state = reactive({
    count: 0,
})

watch(
    () => state,
    (newValue, oldValue) => {
        console.log('func, not deep')
        console.log('count:', oldValue.count, '->', newValue.count)
    }
)

watch(
    () => state,
    (newValue, oldValue) => {
        console.log('func, deep')
        console.log('count:', oldValue.count, '->', newValue.count)
    },
    {
        deep: true,
    }
)

watch(
    state,
    (newValue, oldValue) => {
        console.log('direct, not deep')
        console.log('count:', oldValue.count, '->', newValue.count)
    }
)

watch(
    state,
    (newValue, oldValue) => {
        console.log('direct, deep')
        console.log('count:', oldValue.count, '->', newValue.count)
    },
    {
        deep: true,
    }
)
</script>

<template>
    <h3>deep</h3>
    <button @click="state.count++">count: {{ state.count }}</button>
</template>
