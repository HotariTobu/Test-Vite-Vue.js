<script setup>
import { provide, ref } from 'vue';

import CompA from './CompA.vue';
import CompC from './CompC.vue';

provide('message', 'ProIn Message')

const count = ref(0)
provide('count', count)
provide('addCount', () => count.value++)
</script>

<template>
    <h2>provide-inject</h2>
    <CompA message="Props Message"></CompA>

    <button @click="count++">COUNT UP</button>
    <CompC></CompC>
</template>
