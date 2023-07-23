<script setup>
const message = '<strong>Hello World</strong>'
</script>

<template>
    <h3>v-html</h3>
    <div v-text="message"></div>
    <div v-html="message"></div>
</template>
