<script setup>
import { useStoreCounter } from '../../../../stores/reffect/pinia/counter'
const counter = useStoreCounter()
</script>

<template>
    <h3>Hello Pinia</h3>
    <button @click="counter.increment">count: {{ counter.count }}</button>
</template>
