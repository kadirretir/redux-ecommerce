import { productData } from "../data";
import { addItemToCart, removeItemFromCart } from './card-utils';

const INITIAL_STATE = {
    data: productData,
    inCart: [],
    changeHamburger: false,
 
}

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                inCart: addItemToCart(state.inCart, action.payload)
            };
        case "DECREASE_QUANTITY":
            return {
                ...state,
                inCart: removeItemFromCart(state.inCart, action.payload)
            }

        case "DELETE_FROM_CART":
            return {
                ...state,
                inCart: state.inCart.filter(item => item !== action.payload)
            }
        case "CHANGE_HAMBURGER":
            return {
                ...state,
                changeHamburger: !state.changeHamburger
            }
        case "SCREEN_RESIZE":
            if(action.screenWidth <= 768) {
                return {...state, changeHamburger: state.changeHamburger = false}
            } else {
                return {...state, changeHamburger: state.changeHamburger = true}
            }
            
        default:
            return state;
    }

}

export default reducer;

/* screenWidth: typeof window === 'object' ? window.innerWidth : null */