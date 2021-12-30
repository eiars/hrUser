<template>
    <div class="todo-header">
        <input type="text" placeholder="请输入您的任务名称，按回车健确认" v-model="title" @keyup.enter="addList">
    </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
export default defineComponent({
    name: 'Header',
    props: {
        addTodo: {
            type: Function,
            required: true
        }
    },
    setup (props) {
        const title = ref('')
        // 回车事件回调，添加数据
        const addList = () => {
            const text = title.value
            if (!text.trim()) {return}
            const todo = {
                id: Date.now(),
                title: text,
                isCompleted: false
            }
            props.addTodo(todo)
            title.value = ''
        }
        return { title, addList }
    }
})
</script>

<style scoped>
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}
.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>