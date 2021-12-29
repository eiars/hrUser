import {onMounted, onUnmounted, ref} from 'vue'
// 自定义Hook函数
// 使用vue3的组合API封装的可复用功能函数
// 自定义hook的作用类似于vue2中的mixin技术
// 自定义hook的优势：很清楚复用功能代码的来源，更清晰易懂
//eg: 收集用户鼠标点击的页面坐标
export default function useMousePosition() {
    // 初始化坐标数据
    const x = ref(-1)
    const y = ref(-1)
    // 收集点击事件坐标
    const updatePosition = (e: MouseEvent) => {
        x.value = e.pageX
        y.value = e.pageY
    }
    // 挂在后绑定点击监听
    onMounted(() => {
        document.addEventListener('click', updatePosition, false)
    })
    // 移除绑定监听
    onUnmounted(() => {
        document.removeEventListener('click', updatePosition, false)
    })
    return { x, y}
}