import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore("cart", () => {
    const cartList = ref([])

    const addToCart = (goods) => {
        const item = cartList.value.find((cartItem) => cartItem.skuId === goods.skuId)
        if (item){
            item.count += 1
        }
        else {
            cartList.value.push(goods)
        }
    }

    const delCart = (skuId) => {
        const idx = cartList.value.findIndex((cartItem) => cartItem.skuId === skuId)
        cartList.value.splice(idx, 1)
    }

    return {
        cartList, 
        addToCart,
        delCart
    }
},{
    persist: true,
})