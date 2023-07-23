<script setup>
import { reactive, ref, watchEffect } from 'vue';

const count = ref(0)
const state = reactive({
    count: 0,
})

watchEffect(() => {
    console.log('count:', count.value)
})

watchEffect(() => {
    console.log('count:', count.value, 'state.count:', state.count)
})
</script>

<template>
    <h3>watchEffect</h3>
    <div class="v-flex">
        <button @click="count++">count: {{ count }}</button>
        <button @click="state.count++">count: {{ state.count }}</button>
    </div>
</template>
