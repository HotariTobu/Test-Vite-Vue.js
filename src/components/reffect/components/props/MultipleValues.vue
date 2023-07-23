<script setup>
const props = defineProps({
    message: String,
    name: String,
})
</script>

<template>
    <p>{{ props.message }}</p>
    <p>{{ props.name }}</p>
</template>
