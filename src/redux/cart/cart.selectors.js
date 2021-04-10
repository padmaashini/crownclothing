import { createSelector } from 'reselect';
// two types of selectors

// input selector, doesn't use createSelector
// function that gets the whole state and returns just a slice of it
// one layer deep usually, in this case we just want the cart
const selectCart = state => state.cart; 

// output selectors that uses input selectors and createSelector
// because we used createSelector to create this selector, it's a memoir selector
export const selectCartItems = createSelector(
    // first argument is an array 
    [selectCart],
    // second argument is a function that will return the argument we want out of it
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity,
            0
        )
)