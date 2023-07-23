<script setup>
console.log('Hello World')

const message = 'Hello World'
</script>

<template>
    <h3>mustache</h3>
    <p>{{ message }}</p>
    <div>{{ message.length * 10 }}</div>
    <div>{{ message.length > 10 ? 'Long' : 'Short' }}</div>
</template>
