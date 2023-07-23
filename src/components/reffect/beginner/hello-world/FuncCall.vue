<script setup>
let message = 'Hello World'

const upperMessage = () => {
    message = message.toLocaleUpperCase()
}

upperMessage()
</script>

<template>
    <h3>function call</h3>
    <div v-text="message"></div>
</template>
