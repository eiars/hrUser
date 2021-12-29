<template>
    setup执行时机：
    是在beforeCreate之前执行的，此时组件对象还未创建
    this也还是undefined的，不能通过this访问
    此时所有的composition API回调函数也不可使用
    setup返回值：
    一般返回一个对象；
    返回对象中的属性会与data函数返回的属性合并成为组件对象属性
    返回对象方法会与methods中的方法合并成组件对象方法
    如果重名，setup会优先
    注意：
    一般不要混合使用：methods中可以访问setup中的属性方法，单setup不能访问data和methods中的
    setup不能是async函数，因为async返回值是promise了
    setup的参数：
    1)、setup(props, context) / setup(props, {attrs, slots, emit})
    2)、props:包含props配置传入属性对象
    3)、attrs:包含没有在props配置中声明的属性对象，相当与this.$attrs
    4)、slots：包含所有传入的插槽内容对象，相当于this.$slots
    5)、emit:用来分发自定义事件的函数，相当于this.$emit
    <h2>App</h2>
    <p>msg:{{msg}}</p>
    <button @click="fn('--')">更新</button>

    <child :msg="msg" msg2="cba" @fn="fn">
        <a>……</a>
    </child>
</template>

<script lang="ts">
import { reactive, ref } from 'vue'
import child from './child.vue'
export default {
    components: {child},
    setup() {
        const msg = ref('abc')
        function fn(content: string) {
            msg.value += content
        }
        return { msg, fn}
    }
}
</script>