<script setup>
import { useStoreCounter } from '../../../../stores/reffect/pinia/counter'
const counter = useStoreCounter()

const patch = () => {
    counter.$patch({
        count: 100,
        user: {
            name: 'Jane Doe',
        }
    })
}

const patch2 = () => {
    counter.$patch(state => {
        state.count2 = 200
        state.user.name = 'Tom'
    })
}

const replace = () => {
    counter.$state = {
        count: 9,
    }
}
</script>

<template>
    <h3>methods</h3>
    <button @click="counter.$reset">Reset🍍</button>
    <button @click="patch">Patch🍍</button>
    <button @click="patch2">Patch2🍍</button>
    <button @click="replace">Replace🍍</button>
</template>
