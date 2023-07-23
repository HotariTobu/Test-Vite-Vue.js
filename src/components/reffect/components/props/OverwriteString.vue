<script setup>
const props = defineProps({
    message: String,
})

const changeMessage = () => {
    props.message = 'HaHaHaHa...'
}
</script>

<template>
    <p>{{ props.message }}</p>
    <button @click="changeMessage">Change Message</button>
</template>
