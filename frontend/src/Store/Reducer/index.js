
const INITIAL_STATE={
   products:[],
   detail:[],
   loading:{loading:false},
   open:{open:false}
}

export default function cart(state = INITIAL_STATE,action){
    switch(action.type){
        case 'ADD_PRODUCT':
        return{...state, products:[...state.products, action.payload]}

        case 'REMOVE_PRODUCT':
            return {products: state.products.filter(products => products.id_produtos !== action.payload)}

        case 'ADD_PRODUCT_DETAIL':
            return{...state, detail:[action.payload]}

        case 'OPEN':
            return{...state, open:[action.payload]}
        default:
            return state;
    }
}