<script setup>
import { echo } from './funcs';
</script>

<template>
    <h4>event object</h4>
    <div class="v-flex">
        <button @click="echo($event)">$event</button>
        <button @click="echo">none</button>
    </div>
</template>
