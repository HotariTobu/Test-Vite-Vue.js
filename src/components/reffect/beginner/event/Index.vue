<script setup>
import Click from './Click.vue';
import Params from './Params.vue';
import EventObject from './EventObject.vue';
import EventModifiers from './EventModifiers.vue';
import KeyModifiers from './KeyModifiers.vue';
</script>

<template>
    <h2>Event</h2>
    <Click></Click>
    <Params></Params>
    <EventObject></EventObject>
    <EventModifiers></EventModifiers>
    <KeyModifiers></KeyModifiers>
</template>

<style>
.v-flex {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
}
</style>
