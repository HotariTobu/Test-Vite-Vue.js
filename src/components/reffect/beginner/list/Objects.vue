<script setup>
const users = [
    { id: 1, name: 'John Doe', email: 'john@test.com', admin: true },
    { id: 2, name: 'Jane Doe', email: 'jane@test.com', admin: false },
    { id: 3, name: 'Kevin MacDonald', email: 'kevin@test.com', admin: false },
]
</script>

<template>
    <h3>objects</h3>
    <p v-for="user in users" :key="user">{{ user }}</p>
    <p v-for="user in users" :key="user.id">{{ user.id }}:{{ user.name }}:{{ user.email }}</p>
</template>
