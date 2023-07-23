<script setup>
let count = $ref(0)

const addCount = () => {
    count++;
}
</script>

<template>
    <h3>Reactivity Transform, $ref</h3>
    <button @click="addCount">count: {{ count }}</button>
</template>
