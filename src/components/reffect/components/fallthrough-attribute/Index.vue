<script setup>
import One from './One.vue';
import OneMerge from './OneMerge.vue';
import Two from './Two.vue';
import TwoInOne from './TwoInOne.vue';
import Bind from './Bind.vue';
import NotInherited from './NotInherited.vue';
import UseAttrs from './UseAttrs.vue';
</script>

<template>
    <h2>fallthrough-attribute</h2>
    <h3>One</h3>
    <One class="parent"></One>
    <OneMerge class="parent"></OneMerge>

    <h3>Two</h3>
    <Two class="parent"></Two>
    <TwoInOne class="parent"></TwoInOne>
    <Bind class="parent"></Bind>
    <NotInherited class="parent"></NotInherited>
    <UseAttrs class="parent"></UseAttrs>
    <UseAttrs id="main" style="color: blue;" class="parent"></UseAttrs>
</template>

<style scoped>
.parent {
    color: red;
}
</style>
