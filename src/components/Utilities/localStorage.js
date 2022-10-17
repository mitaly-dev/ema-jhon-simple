const getLocalData=()=>{
    let cart=JSON.parse(localStorage.getItem('shopping-cart'))
    if(!cart){
        cart={}
    }
    return cart;
}

const addCartDB=(id)=>{
    let cart=getLocalData()
    let newQuantity=cart[id]
    if(newQuantity){
        cart[id]=newQuantity+1
    }
    else{
        cart[id]=1
    }
    localStorage.setItem('shopping-cart',JSON.stringify(cart))
}

const clearDB=()=>{
    localStorage.clear('shopping-cart')
}


const removeFromDb = id =>{
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

export {
    addCartDB,
    clearDB,
    getLocalData,
    removeFromDb,
}