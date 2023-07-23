<script setup>
const isActive = false
// const isActive = true
const isDark = true

const classList1 = 'active'
const classList2 = ['active', 'dark']
</script>

<template>
    <h3>class</h3>
    <p class="active">通常のクラス属性</p>
    <p :class="{ active: isActive }">isActiveがtrueの時active</p>
    <p class="underline" :class="{ active: isActive }">常にunderline、isActiveがtrueの時active</p>
    <p :class="{ 'underline active': isActive }">isActiveがtrueの時active、underline</p>
    <p class="underline" :class="{ active: isActive, dark: isDark }">常にunderline、isActiveがtrueの時active、isDarkがtrueのときdark
    </p>
    <p :class="isActive && 'active'">isActiveがtrueの時active</p>
    <p :class="isActive || 'active'">isActiveがfalseの時active</p>
    <p :class="isActive ? 'active' : 'underline'">isActiveがtrueの時active、falseの時underline</p>
    <p :class="classList1">文字列</p>
    <p :class="classList2">配列</p>
    <p :class="[{ active: isActive }, classList1]">オブジェクトを含む配列</p>
    <p :class="[isActive && 'active', isDark ? 'dark' : 'underline']">演算子を含む配列</p>
</template>

<style>
.active {
    color: red;
    font-weight: 900;
}

.underline {
    text-decoration: underline;
}

.dark {
    background-color: black;
}
</style>
