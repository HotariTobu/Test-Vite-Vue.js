<script setup>
const error = 'エラー発生'
const isError = true
// const isError = false

const stock = 30
</script>

<template>
    <h3>v-if</h3>
    <div v-if="error">{{ error }}</div>
    <div v-if="isError">エラーが発生しています</div>
    <div v-else>エラーはありません</div>

    <div v-if="stock > 5">まだ商品の在庫数に余裕があります</div>
    <div v-else-if="stock === 0">申し訳ありません。現在在庫切れです</div>
    <div v-else>在庫数が少なっています。お急ぎください</div>
</template>
