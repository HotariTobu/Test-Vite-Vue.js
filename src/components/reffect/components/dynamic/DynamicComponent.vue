<script setup>
import { computed, ref } from 'vue';

import Tokyo from './Tokyo.vue'
import Kyoto from './Kyoto.vue'

const city = ref('Tokyo')
const tag = computed(() => city.value === 'Tokyo' ? Tokyo : Kyoto)
</script>

<template>
    <h3>dynamic component</h3>
    <div>
        <button @click="city = 'Tokyo'">東京</button>
        <button @click="city = 'Kyoto'">京都</button>
    </div>
    <div>
        <!-- <component :is="city"></component> -->
        <component :is="tag"></component>
    </div>
</template>
