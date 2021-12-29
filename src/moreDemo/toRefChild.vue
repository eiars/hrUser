<template>
    <p>Child</p>
    <p>foo:{{foo}}</p>
    <p>length:{{length}}</p>
</template>

<script lang="ts">
import {computed, defineComponent, toRef, Ref} from 'vue'

const component = defineComponent({
    props: {
        foo: {
            type: Number,
            require: true
        }
    },
    setup(props, context){
        const length = useFeatureX(toRef(props, 'foo'))
        return {length}
    }
})

function useFeatureX(foo: Ref) {
    const lenth = computed(() => foo.value.length)
    return lenth
}
export default component
</script>