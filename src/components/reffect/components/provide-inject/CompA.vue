<script setup>
import CompB from './CompB.vue';

defineProps({
    message: String,
})
</script>

<template>
    <h3>CompA</h3>
    <CompB :message="message"></CompB>
</template>
