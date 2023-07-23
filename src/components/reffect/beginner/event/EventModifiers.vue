<script setup>
import { send } from './funcs';
</script>

<template>
    <h4>event modifiers</h4>
    <form @submit="send">
        <button>送信</button>
    </form>
    <form @submit.prevent="send">
        <button>送信(prevent)</button>
    </form>
</template>
