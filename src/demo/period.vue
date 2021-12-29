<template>
    <p>生命周期</p>
    <p>beforeCreate ->created ->beforeMount -> mounted -->(beforUpdate/updated) -->beforeDestory -->destroyed</p>
    beforeCreate -> 使用 setup()<br/>
    created -> 使用 setup()<br/>
    beforeMount -> onBeforeMount<br/>
    mounted -> onMounted<br/>
    beforeUpdate -> onBeforeUpdate<br/>
    updated -> onUpdated<br/>
    beforeDestroy -> onBeforeUnmount<br/>
    destroyed -> onUnmounted<br/>
    errorCaptured -> onErrorCaptured<br/>
    组合式API提供了调试钩子函数：onRenderTracked、onRenderTriggered
    <p>msg:{{msg}}</p>
    <button @click="update">更新</button>
</template>

<script lang="ts">
import { onMounted, onBeforeMount, ref, onBeforeUpdate,onUpdated, onBeforeUnmount, onUnmounted } from 'vue'
export default {
    beforeCreate() {console.log('beforeCreate()')},
    created() { console.log('created') },
    beforeMount() {console.log()},
    mounted() {console.log('mounted')},
    beforeUpdate() {console.log('beforeUpdate')},
    updated() {console.log('updated')},
    beforeUnmount() {console.log('beforeDestroy---beforeUnmount')},
    unmounted() {console.log('destroyed---unmounted')},
    setup() {
        const msg = ref('abc')
        const update = ()=> {msg.value += '---'}
        onBeforeMount(()=>{console.log('--onBeforeMount')})
        onMounted(()=>{console.log('--onMounted')})
        onBeforeUpdate(()=>{console.log('--onBeforeUpdate')})
        onUpdated(()=>{console.log('--onUpdated')})
        onBeforeUnmount(()=>{console.log('--onBeforeUnmount')})
        onUnmounted(()=>{console.log('--onUnmounted')})
        return {msg, update}
    }
}
</script>