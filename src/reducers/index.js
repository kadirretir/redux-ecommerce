import { productData } from "../data";
import { addItemToCart, removeItemFromCart } from './card-utils';

const INITIAL_STATE = {
    data: productData,
    inCart: [],
    changeHamburger: false,
    radioInItem: false,
    filteredItems: productData
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
            if (action.screenWidth <= 768) {
                return { ...state, changeHamburger: state.changeHamburger = false }
            } else {
                return { ...state, changeHamburger: state.changeHamburger = true }
            }
        case "FILTERED_RADIO":
            const filteredByRadio = state.data.filter(item => item ?
                item.brand.toLowerCase().includes(action.payload) : item);
            return { ...state, radioInItem: state.radioInItem = action.payload, filteredItems: filteredByRadio }

        default:
            return state;
    }

}

export default reducer;
