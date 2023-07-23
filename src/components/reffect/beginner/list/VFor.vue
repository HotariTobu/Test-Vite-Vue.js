<script setup>
const techs = ['JavaScript', 'TypeScript', 'Vue.js']
</script>

<template>
    <h3>v-for</h3>
    <h4>without :key (low performance)</h4>
    <p v-for="tech in techs">{{ tech }}</p>
    <h4>with :key (high performance)</h4>
    <p v-for="tech in techs" :key="tech">{{ tech }}</p>

    <h4>with index</h4>
    <p v-for="(tech, index) in techs" :key="tech">{{ index }}. {{ tech }}</p>
</template>
