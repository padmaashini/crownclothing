import React from 'react'; 
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './collections-overview.styles.scss';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../preview-collection/preview-collection.component';


const CollectionsOverview = ({ shopData }) => (
    <div className='collections-overview'>
        {
            shopData.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))  
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    shopData: selectCollectionsForPreview
})
export default connect(mapStateToProps)(CollectionsOverview);