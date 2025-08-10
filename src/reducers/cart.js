const cart = (state = [], action) => {
    switch (action.type){
        case 'ADDTOCART':
            const productInState = state.filter(obj => obj.id === action.payload);
            if (productInState.length===0){
                return [...state, {id: action.payload, count: 1}];
            }
            const count = productInState[0].count + 1;
            return state.map(obj => obj.id === action.payload ? {id: action.payload, count: count} : obj);
        case 'DELETEFROMCART':
            const productInStateDelete = state.filter(obj => obj.id === action.payload);
            if (productInStateDelete[0].count === 1){
                return state.filter(obj => obj.id !== action.payload);
            }
            const countDelete = productInStateDelete[0].count - 1;
            return state.map(obj => obj.id === action.payload ? {id: action.payload, count: countDelete} : obj);
        default:
            return state;
    }
}

export default cart;