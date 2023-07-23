<script setup>
const props = defineProps({
    message: String,
    name: {
        type: String,
        default: 'Jane',
    },
})
</script>

<template>
    <p>{{ props.message }}</p>
    <p>{{ props.name }}</p>
</template>
