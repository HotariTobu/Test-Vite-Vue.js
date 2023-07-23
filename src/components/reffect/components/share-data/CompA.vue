<script setup>
import { counter } from '../../../../stores/reffect/components/count-store';
</script>

<template>
    <h2>CompA</h2>
    <button @click="counter.addCount">count: {{ counter.count }}</button>
</template>
