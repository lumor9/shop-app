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

export { addToCart, deleteFromCart };