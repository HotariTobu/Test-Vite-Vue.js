<script setup>
const props = defineProps({
    str: String,
    bool: Boolean,
})

console.log('str:', typeof props.str)
console.log('bool:', typeof props.bool)
</script>

<template>
    <p v-show="props.str">str</p>
    <p v-show="props.bool">bool</p>
</template>
