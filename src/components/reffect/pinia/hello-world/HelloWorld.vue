<script setup>
import { useStoreCounter } from '../../../../stores/reffect/pinia/counter'
const counter = useStoreCounter()
</script>

<template>
    <h3>Hello World</h3>
    <button @click="counter.count++">count: {{ counter.count }}</button>
</template>
