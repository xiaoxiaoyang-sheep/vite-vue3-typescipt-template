<template>
    <div class="wrap-about">
        <sheep-tag :text="text" :theme="theme"></sheep-tag>
        <sheep-tag :text="text" :theme="theme"></sheep-tag>
        <sheep-tag :text="text" :theme="theme"></sheep-tag>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
// import tag from './tag.vue';
const text = ref('大伟');
const theme = ref('black');
</script>
<style lang="less" scoped>
.wrap-about {
    // color: @color;
    background: var(--dawei-color-dark-black);
}
</style>
