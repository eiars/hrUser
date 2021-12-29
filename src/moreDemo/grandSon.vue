<template>
    <p :style="{color}">孙子组件：{{color}}</p>
</template>

<script lang="ts">
import {inject} from 'vue'
export default {
    setup() {
        const color = inject('color')
        return{color}
    }
}
</script>