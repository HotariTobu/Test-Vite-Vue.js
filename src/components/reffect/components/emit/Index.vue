<script setup>
import { ref } from 'vue';
import DefineEmitsFunc from './DefineEmitsFunc.vue';
import DefineEmitsFuncFunc from './DefineEmitsFuncFunc.vue';
import DefineEmitsTwo from './DefineEmitsTwo.vue';
import EmitOne from './EmitOne.vue';
import EmitTwo from './EmitTwo.vue'
import UpdateByEvent from './UpdateByEvent.vue';
import SendData from './SendData.vue';
import InputComponent from './InputComponent.vue';
import Validation from './Validation.vue';

const handleEvent = e => {
    console.log('子コンポーネントからの通知', e)
}

const name = ref('John')

const changeName = () => {
    name.value = 'Ken'
}

const updateName = newValue => {
    name.value = newValue
}
</script>

<template>
    <h2>emit</h2>
    <EmitOne @notification="handleEvent"></EmitOne>
    <EmitTwo @notification="handleEvent"></EmitTwo>
    <DefineEmitsTwo @notification="handleEvent"></DefineEmitsTwo>
    <DefineEmitsFunc @notification="handleEvent"></DefineEmitsFunc>
    <DefineEmitsFuncFunc @notification="handleEvent"></DefineEmitsFuncFunc>
    <UpdateByEvent :name="name" @change-name-event="changeName"></UpdateByEvent>
    <SendData :name="name" @update-name-event="updateName"></SendData>
    <InputComponent :model-value="name" @update:model-value="name = $event"></InputComponent>
    <Validation :name="name" @update-name="name = $event"></Validation>
</template>
