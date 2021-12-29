<template>
    <h2>Computed</h2>
    firstName:
    <input type="text" v-model="user.firstName">
    <br/>
    lastName:
    <input type="text" v-model="user.lastName">
    <br/>
    fullName1:
    <input type="text" v-model="fullName1">
    <br/>
    fullName2:
    <input type="text" v-model="fullName2">
    <br/>
    fullName3:
    <input type="text" v-model="fullName3">
</template>

<script lang="ts">
// computed函数：
//   与computed配置功能一致，只有getter，有getter和setter
// watch函数
//   与watch配置功能一致，监听指定的一个或多个响应式数据，数据变化自动执行监视回调
//   初始时不执行回调，但配置immediate为true可监视初始
//   通过配置deep为ture来指定深度监视
// watchEffect函数
//   不用直接指定监视数据，回调函数中使用的响应式数据就监视那些数据
//   默认初始化就执行，监视数据变化就回调
import { reactive, ref, computed, watch, watchEffect } from 'vue'
export default {
    setup() {
        const user = reactive({
            firstName: 'A',
            lastName: 'B'
        })
        //只有getter的计算属性
        const fullName1 = computed(() => {
            console.log('fullName1')
            return user.firstName + '-' + user.lastName
        })
        // 有getter与setter的计算属性
        const fullName2 = computed({
            get() {
                console.log('fullName2 get')
                return user.firstName + '-' + user.lastName
            },
            set(value: string) {
                console.log('fullName2 set')
                const names = value.split('-')
                user.firstName = names[0]
                user.lastName = names[1]
            }
        })
        const fullName3 = ref('')
        // watchEffect: 监视所有回调中使用的数据
        watchEffect(()=> {
            console.log('watchEffect')
            fullName3.value = user.firstName+ '+' + user.lastName
        })

        // 用watch的深度监视和初始化立即执行
        watch(user, ()=> {
            fullName3.value = user.firstName + '-' + user.lastName
        },{immediate: true, deep: true}) //是否初始化立即执行，是否深度监视

        // watch一个数据, 默认在数据发生改变时执行回调
        watch(fullName3, value => {
            console.log('watch')
            const names = value.split('-')
            user.firstName = names[0]
            user.lastName = names[1]
        })
        // wathc多个数据：
        // 使用数组来指定，若是ref对象直接指定，若是reactive对象中的属性通过函数指定
        watch([() => user.firstName, () => user.lastName, fullName3], values => {
            console.log('监视多个数据', values)
        })
        return {user, fullName1, fullName2, fullName3}
    }
}
</script>