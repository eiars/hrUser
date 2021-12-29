<template>
    <div class="about">
        <h2 v-if="loading">LOADING...</h2>
        <h2 v-else-if="errorMsg">{{errorMsg}}</h2>
        
        <ul v-for="p in result" :key="p.id">
            <li>id:{{id}}</li>
            <li>title:{{p.title}}</li>
            <li>price:{{p.price}}</li>
        </ul>
    </div>
</template>

<script lang="ts">
import {watch} from 'vue'
import useRequest from './useRequest'
// 地址数据接口
interface AddressResult {
    id: number
    name: string
    distance: string
}
// 产品数据接口
interface ProductResult {
    id: string
    title: string
    price: number
}
export default {
    setup () {
        const {loading, result, errorMsg} = useRequest<ProductResult[]>('/products.json')

        watch(result, ()=>{
            if(result.value) {
                console.log(result.value.length)
            }
        })
        return {loading, result, errorMsg}
    }
}
</script>