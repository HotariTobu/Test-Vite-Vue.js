<script setup>
import { ref } from 'vue';

const count = ref(0)
</script>

<template>
    <h4>東京</h4>
    <p>日本の首都です</p>
    <button @click="count++">count: {{ count }}</button>
</template>
