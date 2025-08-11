const addToCart = (id) => {
    return {
        type:'ADDTOCART',
        payload: id,
    }
}

const deleteFromCart = (id) => {
    return {
        type:'DELETEFROMCART',
        payload: id,
    }
}

const clearCart = () => {
    return {
        type:'CLEARCART'
    }
}

export { addToCart, deleteFromCart, clearCart };