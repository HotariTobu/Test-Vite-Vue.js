<script setup>
const props = defineProps({
    str: String,
    num: Number,
})

console.log('str:', typeof props.str)
console.log('num:', typeof props.num)
</script>

<template>
    <p>{{ props.str + 100 }}</p>
    <p>{{ props.num + 100 }}</p>
</template>
