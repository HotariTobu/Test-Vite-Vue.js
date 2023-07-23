<script setup>
const users = [
    { id: 1, name: 'John Doe', email: 'john@test.com', admin: true },
    { id: 2, name: 'Jane Doe', email: 'jane@test.com', admin: false },
    { id: 3, name: 'Kevin MacDonald', email: 'kevin@test.com', admin: false },
]
</script>

<template>
    <h3>object properties</h3>
    <div v-for="value in users[0]" :key="value">{{ value }}</div>

    <h4>with name</h4>
    <div v-for="(value, name) in users[0]" :key="value">{{name}}: {{ value }}</div>
</template>
