<template>
    <h2>{{ count }}</h2>
    <hr/>
    <button @click="update">更新</button>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        // 定义响应式数据 ref对象
        const count = ref(1)
        console.log(count)
        function update() {
            count.value = count.value + 1
        }
        return {
            count, update
        }
    }
}
</script>