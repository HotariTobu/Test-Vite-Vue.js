<script setup>
const activeColor = 'red'
const activeFontWeight = '900'

const activeStyle1 = 'color: red; font-weight: 900;'
const activeStyle2 = {
    color: 'red',
    fontWeight: 900,
}
</script>

<template>
    <h3>style</h3>
    <p :style="{ color: activeColor, fontWeight: activeFontWeight }">キャメルケース</p>
    <p :style="{ color: activeColor, 'font-weight': activeFontWeight }">ケバブケース</p>
    <p :style="activeStyle1">文字列</p>
    <p :style="activeStyle2">オブジェクト</p>
</template>
