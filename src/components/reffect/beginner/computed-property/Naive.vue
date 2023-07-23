<script setup>
import { reactive } from 'vue';

const user = reactive({
    firstName: 'John',
    lastName: 'Doe',
})
</script>

<template>
    <h3>naive</h3>
    <p>full-name: {{ user.firstName }} {{ user.lastName }}</p>
</template>
