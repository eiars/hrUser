<template>
    <ul class="todo-main">
        <Item
            v-for="(todo, index) in todos" 
            :key="todo.id"
            :todo="todo"
            :index="index"
            :deleTodo="deleTodo"
            :updateTodo="updateTodo"
        />
    </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Item from './item.vue'

export default defineComponent({
    name: 'List',
    components: {Item},
    props: ['todos', 'deleTodo', 'updateTodo']
})
</script>

<style scoped>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>