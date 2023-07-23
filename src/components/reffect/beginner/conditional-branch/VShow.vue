<script setup>
const isError = true
// const isError = false
</script>

<template>
    <h3>v-show</h3>
    <div v-if="isError">エラーが発生しています</div>
    <div v-show="isError">エラーが発生しています</div>
</template>
