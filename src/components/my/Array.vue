<script setup>
import { reactive, ref } from 'vue';

const A = ref(['a', 'b', 'c',])
const B = reactive(['a', 'b', 'c',])

const C = ref(null)
C.value = ['a', 'b', 'c',]

const av = ref('')
const bv = ref('')
const cv = ref('')

const addA = () => {
    A.value.push(av.value)
    av.value = ''
}

const addB = () => {
    B.push(bv.value)
    bv.value = ''
}

const addC = () => {
    C.value.push(cv.value)
    cv.value = ''
}

const removeA = () => {
    A.value.splice(av.value, 1)
    av.value = ''
}

const removeB = () => {
    B.splice(bv.value, 1)
    bv.value = ''
}

const removeC = () => {
    C.value.splice(cv.value, 1)
    cv.value = ''
}
</script>

<template>
    <h3>array</h3>

    <div>
        <div>
            <h4>ref</h4>
            <p v-for="v in A" :key="v">{{ v }}</p>
            <input v-model="av">
            <button @click="addA">add</button>
            <button @click="removeA">remove</button>
        </div>
        <div>
            <h4>reactive</h4>
            <p v-for="v in B" :key="v">{{ v }}</p>
            <input v-model="bv">
            <button @click="addB">add</button>
            <button @click="removeB">remove</button>
        </div>
        <div>
            <h4>acquired ref</h4>
            <p v-for="v in C" :key="v">{{ v }}</p>
            <input v-model="cv">
            <button @click="addC">add</button>
            <button @click="removeC">remove</button>
        </div>
    </div>
</template>
