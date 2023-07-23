<script>
const isLowerCase = str => {
    return str === str.toLowerCase() && str !== str.toUpperCase()
}
</script>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    name: String,
})

const name = ref(props.name)

const emit = defineEmits({
    updateName: name => {
        console.log(name)
        return isLowerCase(name)
    }
})

const changeName = () => {
    emit('updateName', name.value)
}
</script>

<template>
    <h2>Validation</h2>
    <p>input lowercase</p>
    <input v-model="name" @input="changeName">
</template>
