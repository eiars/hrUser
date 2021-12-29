<template>
    <h2>鼠标坐标：{{x}},{{y}}</h2>
</template>

<script lang="ts">
import {ref} from 'vue'
import userMousePosition from './userMousePosition'

export default {
    setup() {
        const {x, y} = userMousePosition()

        return {x, y}
    }
}
</script>