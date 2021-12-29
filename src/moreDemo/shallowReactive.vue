<template>
    <h3>shallowReactive与shallowRef</h3>
    <p>m1:{{m1}}</p>
    <p>m2:{{m2}}</p>
    <p>m3:{{m3}}</p>
    <p>m4:{{m4}}</p>
    <button @click="update">更新</button>
</template>

<script lang="ts">
import {ref, reactive, shallowReactive, shallowRef} from 'vue'
// shallowReactive:只处理对象最外层属性的响应式（浅响应式）
// shallowRef: 只处理value的响应式，不进行对象的reactive处理
// 使用：
// 一般使用ref和reactive；
// 若一个对象数据，结构深，但变化时只是外层属性变化用shallowReactive
// 若一个对象数据，后面会产生新的对象来替换用shallowRef

export default {
    setup() {
        const m1 = reactive({a:1, b:{c:2}})
        const m2 = shallowReactive({a:1, b:{c:2}})

        const m3 = ref({a:1, b:{c:2}})
        const m4 = shallowRef({a:1, b:{c:2}})

        const update = () => {
            m1.a += 1
            m1.b.c += 1
            m2.a += 1
            m2.b.c += 1
            m3.value.a += 1
            m3.value.b.c += 1
            m4.value.a += 1
            m4.value.b.c += 1
        }

        return {m1,m2,m3,m4,update}
    }
}
</script>