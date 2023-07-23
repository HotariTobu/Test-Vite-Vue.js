<script setup>
import { computed, reactive } from 'vue';

const user = reactive({
    firstName: 'John',
    lastName: 'Doe',
})

// const fullName = computed(() => `${user.firstName} ${user.lastName}`)
const fullName = computed({
    get() {
        return `${user.firstName} ${user.lastName}`
    },
    set(newValue) {
        const names = newValue.split(' ')
        user.firstName = names[0]
        user.lastName = names[names.length - 1]
    }
})

const changeName = () => {
    fullName.value = 'Jane Doe'
}
</script>

<template>
    <h3>computed</h3>
    <p>full-name: {{ fullName }}</p>
    <button @click="changeName">Change Name</button>
</template>
