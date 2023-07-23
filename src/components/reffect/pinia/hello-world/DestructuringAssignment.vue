<script setup>
import { storeToRefs } from 'pinia'

import { useStoreCounter } from '../../../../stores/reffect/pinia/counter'
// const {count, increment} = useStoreCounter()

const counter = useStoreCounter()
const { count } = storeToRefs(counter)
const { increment } = counter
</script>

<template>
    <h3>destructuring assignment</h3>
    <button @click="increment">count: {{ count }}</button>
</template>
