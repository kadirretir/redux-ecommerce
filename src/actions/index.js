
export const addcart = (quantity) => {
    return {
        type: "ADD_TO_CART",
        payload: quantity,
    }
};

export const decrease = (quantity) => {
    return {
        type: "DECREASE_QUANTITY",
        payload: quantity
    }
};

export const sepettenCikar = (id) => {
    return {
        type: "DELETE_FROM_CART",
        payload: id

    }
};

export const hamburgerAction = (click) => {
    return {
        type: "CHANGE_HAMBURGER",
        payload: click
    }
};

export const screenResize = (width) => {
    return {
        type: "SCREEN_RESIZE",
        screenWidth: width
    };
};

export const getFilteredbyRadio = (radioin) => {
    return {
        type: "FILTERED_RADIO",
        payload: radioin
    }
  };







