<script setup>
import { ref } from 'vue';

import Tokyo from './Tokyo.vue'
import Kyoto from './Kyoto.vue'

const city = ref('Tokyo')
</script>

<template>
    <h3>naive</h3>
    <div>
        <button @click="city = 'Tokyo'">東京</button>
        <button @click="city = 'Kyoto'">京都</button>
    </div>
    <div>
        <Tokyo v-if="city === 'Tokyo'"></Tokyo>
        <Kyoto v-else></Kyoto>
    </div>
</template>
