<template>
    <h3>toRaw与markRaw</h3>
    <p>state:{{state}}</p>
    <button @click="testToRaw">测试toRaw</button>
    <button @click="testMarkRaw">测试markRaw</button>
</template>

<script lang="ts">
import {markRaw, toRaw, reactive} from 'vue'

// toRaw: 得到由reactive或readonly转换成响应式代理的对象
// 应用： 一个还原方法，临时读取，访问不会被代理/跟踪（写入不会触发界面更新）
// markRaw: 标记一个对象，其永远不会转为代理，返回对象本身
// 应用：
//     当值不应被设为响应式，例第三方类或vue组件对象
//     渲染具有不可变数据源的大列表时，可跳过代理转换提高性能

export default {
    setup () {
        const state = reactive<any>({
            name: 'tom',
            age: 25
        })
        const testToRaw = () => {
            const user = toRaw(state)
            user.age++  //界面不会更新
            console.log(user, '--user')
        }
        const testMarkRaw = () => {
            const likes = ['a', 'b']
            state.likes = likes
            state.likes = markRaw(likes) //likes数组不再是响应式
            setTimeout(()=>{
                state.likes[0]+= '--'
            },2000)
        }
        return {state, testToRaw, testMarkRaw}
    }
}
</script>