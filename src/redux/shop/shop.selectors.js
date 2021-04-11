import { createSelector } from 'reselect';

const selectShop = state => state.shop; 

export const selectShopData = createSelector(
    [selectShop],
    shop => shop.shop_data
)