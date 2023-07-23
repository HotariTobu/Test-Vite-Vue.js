<script setup>
const users = [
    { id: 1, name: 'John Doe', email: 'john@test.com', admin: true },
    { id: 2, name: 'Jane Doe', email: 'jane@test.com', admin: false },
    { id: 3, name: 'Kevin MacDonald', email: 'kevin@test.com', admin: false },
]
</script>

<template>
    <h4>table</h4>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>ユーザ名</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in users" :key="user.is">
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
            </tr>
        </tbody>
    </table>
</template>
