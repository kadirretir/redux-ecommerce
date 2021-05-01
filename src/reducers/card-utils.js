export const addItemToCart = (inCart, cartItemToAdd) => {

    const existingCartItem = inCart.find(item => item.id === cartItemToAdd.id);
    if (existingCartItem) {

        return inCart.map(item =>
            item.id === cartItemToAdd.id
                ? { ...cartItemToAdd, quantity: item.quantity + 1 }
                : item
        );
    }

    return [...inCart, { ...cartItemToAdd, quantity: 1 }];
};


export const removeItemFromCart = (inCart, cartItemToRemove) => {

    const existingCartItem = inCart.find(
        item => item.id === cartItemToRemove.id
    );

    if (existingCartItem.quantity === 1) {
        return inCart.filter(item => item.id !== cartItemToRemove.id);
    }

    return inCart.map(item =>
        item.id === cartItemToRemove.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
    );

};