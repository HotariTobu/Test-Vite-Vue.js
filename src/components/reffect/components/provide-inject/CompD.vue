<script setup>
import { inject } from 'vue';

const count = inject('count')
const addCount = inject('addCount')
</script>

<template>
    <h4>CompD</h4>
    <p>{{ count }}</p>
    <button @click="addCount">count up</button>
</template>
