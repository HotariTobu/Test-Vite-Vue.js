<script setup>
const props = defineProps({
    person: Object,
})

const changeName = () => {
    props.person.name = 'Tom'
}
</script>

<template>
    <p>{{ props.person.name }}</p>
    <button @click="changeName">Change Name</button>
</template>
