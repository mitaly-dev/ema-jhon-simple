import { addCartDB, getLocalData } from "./localStorage"

const getProductAndCart=async ()=>{
    let res=await fetch('products.json')
    let products=await res.json()

    let cart=getLocalData()
    let cartProduct=[]
    for(let id in cart){
        let isCart=products.find(product=>product.id===id)
        if(isCart){
            isCart.quantity=cart[id]
            cartProduct.push(isCart)
        }
    }
   return {products,cartProduct}
}
export default getProductAndCart