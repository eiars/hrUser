<template>
    <h2>name: {{ state.name }}</h2>
    <h2>age: {{ state.age }}</h2>
    <h2>wife: {{ state.wife}}</h2>
    <hr/>
    <button @click="update">更新</button>
</template>

<script>
import { reactive } from 'vue'
// reactive 定义多个数据的响应式
// const proxy = reactive(obj):
// 接受一个普通对象然后返回该普通对象的响应式代理器对象响应式转换是“深层的”，
// 会影响对象内部所有嵌套属性
// 内部是基于ES6的proxy实现，通过代理对象操作源对象内部数据都是响应式的

// vue2与vue3的数据响应对比：
// vue2：
// 对象是通过defineProperty对对象已有的属性值读取和修改进行setter、getter劫持
// 数组是通过重写数组更新数组一些列更新元素的方法来实现元素修改劫持的
// vue3:
// 通过的是ES6的Proxy（代理）对整个对象进行拦截，然后通过Reflect(反射)动态的对对象属性进行操作
// 在vue3中ref用来处理基本数据类型，reactive用来处理对象（递归深度响应）
// 如果用ref对象、数组，内部会自动转换为reactive的代理对象
export default {
    setup () {
        const state = reactive({
            name: 'tom',
            age: 25,
            wife: {
                name: 'marry',
                age: 22
            }
        })
        console.log(state, state.wife)

        const update = () => {
            state.name += '--',
            state.age += 1,
            state.wife.name += '++'
            state.wife.age += 2
        }
        return { state, update}
    }
}
</script>