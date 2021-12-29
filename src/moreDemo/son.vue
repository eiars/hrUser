<template>
    <div>
        <p>子组件</p>
        <hr />
        <grand-son />
    </div>
</template>

<script lang="ts">
import GrandSon from './grandSon.vue'
export default {
    components: {GrandSon}
}
</script>