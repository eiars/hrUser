<template>
    <li @mouseenter="mouseHandler(true)"
        @mouseleave="mouseHandler(false)"
        :style="{backgroundColor: bgColor, color: myColor}" >
        <label>
            <input type="checkbox" v-model="isComptete" />
            <span>{{ todo.title }}</span>
        </label>
        <button class="btn btn-danger" v-show="isShow" @click="delTodo">删除</button>
    </li>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'

import {Todo} from './todo'

export default defineComponent({
    name: 'Item',
    props:{
        todo: {
            type: Object as () => Todo,
            required: true
        },
        index: {
            type: Number,
            required: true
        },
        deleTodo: {
            type: Function,
            required: true
        },
        updateTodo: {
            type: Function,
            required: true
        }
    },
    setup (props) {
        const bgColor = ref('white')
        const myColor = ref('black')
        const isShow = ref(false)
        // 鼠标事件回调
        const mouseHandler = (flag: boolean) => {
            bgColor.value = flag ? 'pink' : 'white'
            myColor.value = flag ? 'green' : 'black'
            isShow.value = flag
        }
        // 删除事件
        const delTodo = () => {
            console.log(props)
            window.confirm('确定删除么？') && props.deleTodo(props.index)
        }
        // 计算属性方式--判断复选框是否选中
        const isComptete = computed({
            get() {
                return props.todo.isCompleted
            },
            set(val) {
                props.updateTodo(props.todo, val)
            }
        })
        return{isComptete, mouseHandler, delTodo, isShow, bgColor, myColor}
    }
})
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  /* display: none; */
  margin-top: 5px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>