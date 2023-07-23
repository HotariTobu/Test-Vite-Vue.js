<script setup>
import { ref } from 'vue';

const count = ref(0)
</script>

<template>
    <h3>初めてのコンポーネント</h3>
    <button @click="count++">count: {{ count }}</button>
</template>
