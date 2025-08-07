const cart = (state = [], action) => {
    switch (action.type){
        case 'ADDTOCART':
            state = [...state, action.payload];
            return state;
        case 'DELETEFROMCART':
            state = state.filter(obj => obj.id !== action.payload);
            return state;
        default:
            return state;
    }
}

export default cart;