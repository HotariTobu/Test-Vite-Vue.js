<script setup>
const props = defineProps({
    name: String,
})

const emit = defineEmits([
    'changeNameEvent',
])

const changeName = () => {
    emit('changeNameEvent')
}
</script>

<template>
    <h3>update by event</h3>
    <p>Hello {{ props.name }}</p>
    <button @click="changeName">Change Name</button>
</template>
