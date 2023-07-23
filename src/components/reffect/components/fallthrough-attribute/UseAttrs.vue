<script setup>
import { useAttrs } from 'vue';

const attrs = useAttrs()
console.log(attrs, attrs.class)
</script>

<template>
    <h3>UseAttrs</h3>
</template>
