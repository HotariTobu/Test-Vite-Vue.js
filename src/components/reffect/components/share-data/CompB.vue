<script setup>
import { counter } from '../../../../stores/reffect/components/count-store';
</script>

<template>
    <h2>CompB</h2>
    <button @click="counter.count++">count: {{ counter.count }}</button>
</template>
