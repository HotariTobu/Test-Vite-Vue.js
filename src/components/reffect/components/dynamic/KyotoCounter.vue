<script setup>
import { ref } from 'vue';

const count = ref(0)
</script>

<template>
    <h4>京都</h4>
    <p>日本の古都です</p>
    <button @click="count++">count: {{ count }}</button>
</template>
