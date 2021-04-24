import React, { useEffect, useState } from 'react'; 
import { createStructuredSelector } from 'reselect';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CategoryPage from '../category/category.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { updateCollections } from '../../redux/shop/shop.actions';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CategoryPage); 

const ShopPage = ({ match, fetchCollectionsStartAsync, isCollectionFetching, isCollectionsLoaded }) => {
    useEffect(() => {
        fetchCollectionsStartAsync(); 
    }, [])

    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />} />
            <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />} />
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionsLoaded: selectIsCollectionsLoaded
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);