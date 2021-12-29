<template>
    <h3>provide与inject</h3>
    <p>当前颜色：{{ color }}</p>
    <button @click="color = 'red'">红</button>
    <button @click="color = 'yellow'">黄</button>
    <button @click="color = 'blue'">蓝</button>
    <hr />
    <son />
</template>

<script lang="ts">
import {provide, ref} from 'vue'
import Son from './son.vue'

// provide和inject提供依赖注入(成对使用)
// 可实现跨层级组件通信（祖孙跨层级）

export default {
    name: 'PervoideInject',
    components:{Son},
    setup() {
        const color = ref('red')
        provide('color', color)
        return {color}
    }
}
</script>