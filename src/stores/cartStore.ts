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
     // 单选功能
    const singleCheck = (skuId, selected) => {
        // 通过skuId找到要修改的那一项 然后把它的selected修改为传过来的selected
        const item = cartList.value.find((item) => item.skuId == skuId)
        item.selected = selected
    }

    // 全选功能
    const allCheck = (selected) => {
        // 把cartList中的每一项的selected都设置为当前的全选框状态
        cartList.value.forEach(item => item.selected = selected)
    }
    
    // 总商品数量
    const totalCount = computed(() => {
        return cartList.value.reduce((acc, cur) => acc + cur.count, 0)
    })
    // 总商品价格
    const totalPrice = computed(() => {
        return cartList.value.reduce((acc, cur) => acc + cur.price * cur.count, 0)
    })
    // 3. 已选择数量
    const selectedCount = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count, 0))
    // 4. 已选择商品价格合计
    const selectedPrice = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count * c.price, 0))
    // 是否全选
    const isAll = computed(() => cartList.value.every((item) => item.selected))

    return {
        cartList, 
        addToCart,
        delCart,
        totalCount,
        totalPrice,
        singleCheck,
        allCheck,
        selectedCount,
        selectedPrice,
        isAll
    }
},{
    persist: true,
})