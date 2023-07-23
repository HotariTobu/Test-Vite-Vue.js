<script setup>
import { inject } from 'vue';

defineProps({
    message: String,
})
</script>

<template>
    <h4>CompB</h4>
    <p>{{ message }}</p>
    <p>{{ inject('message') }}</p>
</template>
