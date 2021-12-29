<template>
    <h3>customRef</h3>
    <input v-model="keyword" placeholder="搜索关键字" />
    <p>{{ keyword }}</p>
</template>

<script lang="ts">
import {ref, customRef} from 'vue'

// customRef: 创建一个自定义的ref,对其依赖项跟踪和更新触发进行显示控制
// eg：使用customRef实现debounce的示例

export default {
    setup() {
        const keyword = useDebouncedRef('', 500)
        console.log(keyword, '--keyword')
        return {keyword}
    }    
}

// 实现函数防抖的自定义ref
function useDebouncedRef<T>(value:T, delay = 200) {
    let timeout: number
    return customRef((track, trigger) => {
        return {
            get() {
                track()
                return value
            },
            set(newValue: T) {
                clearTimeout(timeout)
                timeout = setTimeout(() => {
                    value = newValue
                    // 告诉vue触发界面更新
                    trigger()
                },delay)
            }
        }
    })
}
</script>