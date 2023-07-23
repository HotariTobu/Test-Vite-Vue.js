<script setup>
const props = defineProps({
    modelValue: String,
})

defineEmits([
    'update:model-value',
])
</script>

<template>
    <h3>Input Component</h3>
    <input :value="modelValue" @input="$emit('update:model-value', $event.target.value)">
</template>

<style scoped>
input {
    padding: 1em;
    border-radius: 1em;
    margin: 0.5em;
}
</style>
