
const INITIAL_STATE={
   products:[],
   loading:{loading:false}
}

export default function cart(state = INITIAL_STATE,action){
    switch(action.type){
        case 'ADD_PRODUCT':
        return{...state, products:[...state.products, action.payload]}

        case 'REMOVE_PRODUCT':
            return {products: state.products.filter(products => products.id_produtos !== action.payload)}
        default:
            return state;
    }
}