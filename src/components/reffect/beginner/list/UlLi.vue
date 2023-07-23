<script setup>
const users = [
    { id: 1, name: 'John Doe', email: 'john@test.com', admin: true },
    { id: 2, name: 'Jane Doe', email: 'jane@test.com', admin: false },
    { id: 3, name: 'Kevin MacDonald', email: 'kevin@test.com', admin: false },
]
</script>

<template>
    <h4>ul, li</h4>
    <ul>
        <li v-for="user in users" :key="user.id">{{ user.id }}:{{ user.name }}:{{ user.email }}</li>
    </ul>
</template>
