<template>
    <h2>输入框自动获取焦点</h2>
    <input type="text"/>
    <br/>
    <input type="text" ref="inputRef">
</template>

<script lang="ts">
import {ref, onMounted} from 'vue'
// 利用ref获取组件中元素标签
// demo:让输入框自动获取焦点
export default {
    setop() {
        const inputRef = ref<HTMLElement | null>(null)
        console.log(inputRef, '---')
        onMounted(() => {
            console.log(inputRef.value, '--inputRef')
            inputRef.value && inputRef.value.focus()
        })

        return {inputRef}
    }
}
</script>
