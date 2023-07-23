<script setup>
const logMessage = () => {
    console.log('button clicked')
}
</script>

<template>
    <h3>click</h3>
    <div class="v-flex">
        <button on-click="logMessage">on-click</button>
        <button v-on:click="logMessage">v-on:click</button>
        <button @click="logMessage">@click</button>
        <button @dblclick="logMessage">@dblclick</button>
    </div>
</template>
