<script setup>
import { computed, reactive } from 'vue';

const user = reactive({
    firstName: 'John',
    lastName: 'Doe',
})

const fullName = computed(() => `${user.firstName} ${user.lastName}`)
</script>

<template>
    <h3>computed</h3>
    <p>full-name: {{ fullName }}</p>
</template>
