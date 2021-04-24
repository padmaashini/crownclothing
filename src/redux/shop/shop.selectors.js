import { createSelector } from 'reselect';

const selectShop = state => state.shop; 

export const selectShopData = createSelector(
    [selectShop],
    shop => shop.shop_data
);

export const selectCollectionsForPreview = createSelector(
    [selectShopData],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const selectCollection = collectionUrlParam => 
    createSelector(
        [selectShopData],
        shop_data => (shop_data ? shop_data[collectionUrlParam] : null)
    )

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
)

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.shop_data
)