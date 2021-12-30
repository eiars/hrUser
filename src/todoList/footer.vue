<template>
    <div class="todo-footer">
        <label>
            <input type="checkbox" v-model="isCheckAll">
        </label>
        <span>
            <span>已完成{{ count }}/全部{{ todos.length }}</span>
        </span>
        <button class="btn btn-danger" @click="clearAllCompletedTodos">清除已完成任务</button>
    </div>
</template>

<script lang="ts">
import {defineComponent, computed} from 'vue'
import {Todo} from './todo'

export default defineComponent({
  name: 'Footer',
  props:{
      todos: {
          type: Array as () => Todo[],
          required: true
      },
      checkAll: {
          type: Function,
          required: true
      },
      clearAllCompletedTodos: {
          type: Function,
          required: true
      }
  },
  setup (props) {
      // 已完成的计算属性监听
      const count = computed(() => {
          return props.todos.reduce((pre, todo) => pre + (todo.isCompleted ? 1 : 0), 0)
      })
      // 是否全选计算属性监听
      const isCheckAll = computed({
          get() {
              return count.value > 0 && props.todos.length === count.value
          },
          set(val) {
              props.checkAll(val)
          }
      })
      return {isCheckAll, count}
  } 
})
</script>

<style scoped>

</style>