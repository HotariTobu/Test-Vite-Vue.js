<script setup>
import { reactive, ref, watch } from 'vue';

const count = ref(0)
const state = reactive({
    count: 0,
})

watch(
    count,
    (newValue, oldValue) => {
        console.log('count:', oldValue, '->', newValue)
    },
    {
        immediate: true,
    }
)

watch(
    () => state.count,
    (newValue, oldValue) => {
        console.log('count:', oldValue, '->', newValue)
    },
    {
        immediate: true,
    }
)
</script>

<template>
    <h3>immediate</h3>
    <div class="v-flex">
        <button @click="count++">count: {{ count }}</button>
        <button @click="state.count++">count: {{ state.count }}</button>
    </div>
</template>
