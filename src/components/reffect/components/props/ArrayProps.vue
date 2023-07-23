<script setup>
const props = defineProps([
    'message'
])
</script>

<template>
    <p>{{ props.message }}</p>
</template>
