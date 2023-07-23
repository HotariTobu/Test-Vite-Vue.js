<script setup>
const url = 'https://google.com'
</script>

<template>
    <h3>v-bind</h3>
    <div>
        <a v-bind:href="url" target="_blank">Google</a>
    </div>
</template>
