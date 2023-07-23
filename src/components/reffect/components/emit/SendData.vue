<script setup>
const props = defineProps({
    name: String,
})

const emit = defineEmits([
    'update-name-event',
])

const updateName = e => {
    const name = e.target.value
    emit('update-name-event', name)
}
</script>

<template>
    <h3>send data</h3>
    Hello
    <input :value="props.name" @input="updateName">
</template>
