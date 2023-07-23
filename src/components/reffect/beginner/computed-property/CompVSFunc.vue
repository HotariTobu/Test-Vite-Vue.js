<script setup>
import { computed, ref } from 'vue';

const comp = computed(() => {
    console.log('comp')
    return Math.random()
})

const func = () => {
    console.log('func')
    return Math.random()
}

const count = ref(0)
</script>

<template>
    <h3>computed vs function</h3>
    <p v-for="i in Array(3)">comp: {{ comp }}</p>
    <p v-for="i in Array(3)">func: {{ func() }}</p>

    <button @click="count++">count: {{ count }}</button>
</template>
