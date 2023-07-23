<script setup>
import { useStoreCounter } from '../../../../stores/reffect/pinia/counter'
const counter = useStoreCounter()
</script>

<template>
    <h3>Getters</h3>
    <button @click="counter.increment">count: {{ counter.count }}</button>
    <p>count * 2: {{ counter.doubleCount }}</p>
</template>
