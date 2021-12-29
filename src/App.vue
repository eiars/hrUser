<template>
<div>
  <h3>新组件</h3>
  <div>
    <modal-button/>
  </div>
  <h3>更多</h3>
  <!-- <div>
    <p>isRef:检查值是否为ref的对象</p>
    <p>isReactive检查是否由reactive创建</p>
    <p>isReadonly检查是否由readonly创建的只读代理</p>
    <p>isProxy检查一个对象是否由reactive或readonly创建代理</p>
    <provide-inject />
    <custom-ref/>
    <to-ref/>
    <mark-raw/>
    <shallow-readonly/>
    <shallow-reactive/>
  </div> -->
  <h3>常用部分</h3>
  <!-- <div>
    <p>8、Ref</p>
    <input-ref/>
    <hr/><hr/>
    <p>7、toRefs</p>
    <to-refs/>
    <hr/><hr/>
    <p>6、自定义hook函数</p>
    <hook/>
    <hook-request/>
    <hr/><hr/>
    <p>5、生命周期</p>
    <period/>
    <hr/><hr/>
    <p>4、computed\watch\watchEffect</p>
    <computed-watch/>
    <hr/><hr/>
    <p>3、reactive</p>
    <reactive/>
    <hr/><hr/>
    <ref/>
    <hr/><hr/>
    <p>2、ref</p>
    <hr/><hr/>
    <p>1、setup</p>
    <setup msg="Welcome to Your Vue.js + TypeScript App"/>
  </div> -->
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import Setup from './demo/setup.vue';
// import Ref from './demo/ref.vue'
// import Reactive from './demo/reactive.vue'
// import ComputedWatch from './demo/computedWatch.vue'
// import Period from './demo/period.vue'
// import Hook from './demo/hook.vue'
// import HookRequest from './demo/hookRequest.vue'
// import ToRefs from './demo/toRefs.vue'
// import InputRef from './demo/inputRef.vue'

// import ShallowReactive from './moreDemo/shallowReactive.vue'
// import ShallowReadonly from './moreDemo/shallowReadonly.vue'
// import MarkRaw from './moreDemo/markRaw.vue'
// import ToRef from './moreDemo/toRef.vue'
// import CustomRef from './moreDemo/customRef.vue'
// import ProvideInject from './moreDemo/provideInject.vue'
import ModalButton from './write/teleport.vue'

export default defineComponent({
  name: 'App',
  components: {
    // Setup, Ref, Reactive, ComputedWatch, Period, Hook, HookRequest, ToRefs, InputRef
    // ShallowReactive, ShallowReadonly, MarkRaw, ToRef, CustomRef, ProvideInject,
    ModalButton
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
