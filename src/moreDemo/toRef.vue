<template>
    <h3>toRef</h3>
    <p>{{ state}}</p>
    <p>{{ foo }}</p>
    <p>{{foo2}}</p>
    <button @click="update">更新</button>
    <to-ref-child :foo ="foo"/>
</template>

<script lang="ts">
import {reactive, toRef, ref} from 'vue'
import ToRefChild from './toRefChild.vue'

// toRef:为响应式对象的某一个属性创建一个ref对象，两者内部操作时同一数据值；
// 与ref的区别：拷贝了一份新的数据值单独操作，互不影响
// 应用场景； 当将某个prop的ref传递给复合函数时，toRef很有用

export default {
    setup () {
        const state = reactive({
            foo: 11,
            bar: 2
        })
        const foo = toRef(state, 'foo')
        const foo2 = ref(state.foo)
        const update = () => {
            state.foo++
            foo.value++
            foo2.value++  //state.foo不会更改
        }
        return {state, foo, foo2, update}
    },
    components: {ToRefChild}
}
</script>