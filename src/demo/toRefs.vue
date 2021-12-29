<template>
    <h2>App</h2>
    <h3>foo: {{foo}}</h3>
    <h3>bar:{{bar}}</h3>
    <h3>foo2:{{foo2}}</h3>
    <h3>bar2:{{bar2}}</h3>
</template>

<script lang="ts">
import {reactive, toRefs} from 'vue'

// toRefs:
// 将响应式对象中所有属性包装为ref对象，并返回包含这些ref对象的普通对象
// 应用：从合成函数返回响应式对象时可用toRefs，组件可以在不丢失响应式的情况下对返回对象分解使用
// 使用reactive后属性，可用toRefs转为ref对象
export default {
    setup() {
        const state = reactive({
            foo: 'a',
            bar: 'b'
        })
        
        const stateAsRefs = toRefs(state)
        console.log(stateAsRefs, 'toRefs(state)')
        setTimeout(() => {
            state.foo += '++'
            state.bar += '++'
        }, 2000)

        const {foo2, bar2} = useReatureX()

        return{...stateAsRefs, foo2, bar2}
    }
}

function useReatureX() {
    const state = reactive({
        foo2: 'a',
        bar2: 'b'
    })

    setTimeout(() => {
        state.foo2 += '++'
        state.bar2 += '++'
    }, 2000)
    return toRefs(state)
}
</script>