<template>
    <h3>readonly与shallowReadonly</h3>
    <p>{{state}}</p>
    <button @click="update">更新</button>
</template>

<script lang="ts">
import {reactive, readonly, shallowReadonly} from 'vue'

// readonly:深度只读数据
//   获取一个对象(响应式或纯对象)或ref并返回原始代理的制度代理。
//   只读代理时深层的，访问的任何嵌套property也是只读
// shallowReadonly:浅只读数据
//    创建代理，其自身的property只读，但不执行嵌套对象的深度只读
//    应用： 不希望对数据进行更新的操作，可包装生产一个只读代理

export default {
    setup () {
        const state = reactive({
            a: 1,
            b: {c: 2}
        })
        const rState1 = readonly(state)
        const rState2 = shallowReadonly(state)

        const update = () => {
            console.log()
            // rState1.a ++ //error readonly只读
            // rState1.b.c ++ //error readonly只读

            // rState2.a++  // error shallowReadonly外层只读
            rState2.b.c ++
        }
        return {state, update}
    }
}
</script>