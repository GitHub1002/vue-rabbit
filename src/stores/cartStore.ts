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

    return {
        cartList, 
        addToCart
    }
},{
    persist: true,
})