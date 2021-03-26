export const addItemToCart = (cartItems, cartItemToAdd) =>  {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);
    
    if(existingCartItem){
        // need to return new versions of state so that it gets re-rendered
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id ?
            {...cartItem, quantity: cartItem.quantity +1 } 
            : cartItem
        )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}