import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCartStore = defineStore("cart", () => {
    const cartList = ref([])

    // 添加购物车商品
    const addToCart = (goods) => {
        const item = cartList.value.find((cartItem) => cartItem.skuId === goods.skuId)
        if (item){
            item.count += 1
        }
        else {
            cartList.value.push(goods)
        }
    }

    // 删除购物车商品
    const delCart = (skuId) => {
        const idx = cartList.value.findIndex((cartItem) => cartItem.skuId === skuId)
        cartList.value.splice(idx, 1)
    }
    
    // 总商品数量
    const totalCount = computed(() => {
        return cartList.value.reduce((acc, cur) => acc + cur.count, 0)
    })
    // 总商品价格
    const totalPrice = computed(() => {
        return cartList.value.reduce((acc, cur) => acc + cur.price * cur.count, 0)
    })
    return {
        cartList, 
        addToCart,
        delCart,
        totalCount,
        totalPrice
    }
},{
    persist: true,
})