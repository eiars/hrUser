<template>
    <div>
        <h3>{{ n }}</h3>
        <h3>{{ m }}</h3>

        <h3>msg:{{ msg }}</h3>
        <h3>msg2: {{$attrs.msg2}}</h3>

        <slot name="xxx"></slot>

        <button @click="update">更新</button>
    </div>
</template>

<script lang="ts">
import { ref, defineComponent} from 'vue'
export default defineComponent({
    name: 'child',
    props: ['msg'],
    emits: ['fn'],
    data () {
        return {}
    },
    beforeCreate() {
        console.log('beforeCreate', this)
    },
    methods: {},
    setup(props, {attrs, emit, slots}) {
        console.log('setup', this)
        console.log(props.msg, attrs.msg2, slots, emit)
        const m = ref(2)
        const n = ref(3)
        console.log(m, n, '---m--n')
        function update () {
            m.value += 2
            n.value += 2
            emit('fn', '++')
        }
        return { m, n, update}
    }
})
</script>