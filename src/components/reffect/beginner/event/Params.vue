<script setup>
import { echo } from './funcs';
</script>

<template>
    <h4>params</h4>
    <div class="v-flex">
        <button @click="echo('クリック')">クリック</button>
        <button @click="echo('クリック'), echo('click')">クリックclick</button>
    </div>
</template>
