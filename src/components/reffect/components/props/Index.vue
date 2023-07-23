<script setup>
import { ref } from 'vue';

import ObjectProps from './ObjectProps.vue';
import ArrayProps from './ArrayProps.vue';
import MultipleValues from './MultipleValues.vue';
import DefaultValue from './DefaultValue.vue';
import ForceValue from './ForceValue.vue';
import Add100 from './Add100.vue';
import Boolean from './Boolean.vue';
import OverwriteString from './OverwriteString.vue'
import OverwriteObject from './OverwriteObject.vue'

const name = ref('Hi')
const person = ref({
    name: 'John',
})
</script>

<template>
    <h2>Props</h2>
    <ObjectProps message="Propsの使い方 (ObjectProps)"></ObjectProps>
    <ArrayProps message="Propsの使い方 (ArrayProps)"></ArrayProps>

    <h3>複数のProps</h3>
    <MultipleValues message="メッセージ" name="名前"></MultipleValues>
    <MultipleValues message="メッセージのみ"></MultipleValues>
    <MultipleValues name="名前のみ"></MultipleValues>

    <h3>初期値</h3>
    <DefaultValue message="メッセージのみ"></DefaultValue>
    <DefaultValue name="名前のみ"></DefaultValue>

    <h3>強制</h3>
    <ForceValue message="メッセージのみ"></ForceValue>
    <ForceValue name="名前のみ"></ForceValue>

    <h3>+100</h3>
    <Add100 str="314" num="314"></Add100>
    <Add100 str=314 num=314></Add100>
    <Add100 :str="314" :num="314"></Add100>

    <h3>ブール値</h3>
    <Boolean str="true" bool="true"></Boolean>
    <Boolean str="false" bool="false"></Boolean>
    <Boolean :str="true" :bool="true"></Boolean>
    <Boolean :str="false" :bool="false"></Boolean>

    <h3>reactiveな変数</h3>
    <ObjectProps message="name"></ObjectProps>
    <ObjectProps :message="name"></ObjectProps>
    <input v-model="name">
    <OverwriteString :message="name"></OverwriteString>
    <OverwriteObject :person="person"></OverwriteObject>
</template>
