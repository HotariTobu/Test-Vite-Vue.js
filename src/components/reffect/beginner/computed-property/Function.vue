<script setup>
import { reactive } from 'vue';

const user = reactive({
    firstName: 'John',
    lastName: 'Doe',
})

const fullName = () => `${user.firstName} ${user.lastName}`
</script>

<template>
    <h3>function</h3>
    <p>full-name: {{ fullName() }}</p>
</template>
