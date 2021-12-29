// 封装ajax请求的hook函数
import {ref} from 'vue'
import axios from 'axios'

// 使用axios发送异步请求
export default function useRulLoader<T>(url: string) {
    const result = ref<T | null>(null)
    const loading = ref(true)
    const errorMsg = ref(null)

    axios.get(url).then(response => {
        loading.value = false
        result.value = response.data
    }).catch(e =>{
        loading.value = false
        errorMsg.value = e.message || '未知错误'
    })
    
    return { loading, result, errorMsg}
}