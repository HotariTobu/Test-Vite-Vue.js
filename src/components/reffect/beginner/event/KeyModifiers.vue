<script setup>
import { echo, send } from './funcs';
</script>

<template>
    <h4>key modifiers</h4>
    <button @keydown="echo">Press any key</button>
    <form @submit.prevent="send">
        <button @keyup.enter="submit">送信(Enter)</button>
    </form>
</template>
