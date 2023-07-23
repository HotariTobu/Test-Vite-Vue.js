<script>
export default {
    inheritAttrs: false,
}
</script>

<script setup>

</script>

<template>
    <div>
        <h3 class="child">NotInherited 1</h3>
        <p :class="$attrs.class">NotInherited 2</p>
    </div>
</template>
