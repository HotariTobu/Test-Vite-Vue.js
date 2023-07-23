<script setup>
import Naive from './Naive.vue';
import DynamicComponent from './DynamicComponent.vue';
import KeepAliveOFF from './KeepAliveOFF.vue';
import KeepAliveON from './KeepAliveON.vue';
</script>

<template>
    <h2>dynamic</h2>
    <Naive></Naive>
    <DynamicComponent></DynamicComponent>
    <KeepAliveOFF></KeepAliveOFF>
    <KeepAliveON></KeepAliveON>
</template>
