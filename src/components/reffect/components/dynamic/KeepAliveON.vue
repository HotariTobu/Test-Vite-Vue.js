<script setup>
import { computed, ref } from 'vue';

import Tokyo from './TokyoCounter.vue'
import Kyoto from './KyotoCounter.vue'

const city = ref('Tokyo')
const tag = computed(() => city.value === 'Tokyo' ? Tokyo : Kyoto)
</script>

<template>
    <h3>keep-alive on</h3>
    <div>
        <button @click="city = 'Tokyo'">東京</button>
        <button @click="city = 'Kyoto'">京都</button>
    </div>
    <div>
        <!-- <keep-alive>
            <component :is="tag"></component>
        </keep-alive> -->
        <KeepAlive>
            <component :is="tag"></component>
        </KeepAlive>
    </div>
</template>
