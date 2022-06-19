import React from 'react';
import SHOP_DATA from './082 shop.data';
import Collection_Preview from '../../components/collection-preview/collection_preview.component';

class ShopPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            collections : SHOP_DATA
        };
    }
    render(){
        const {collections} = this.state;
        return(
            <div className='shop-page'>
                {
                collections.map(({ id, ...otherCollectionProps}) => (
                    <Collection_Preview key={id} {...otherCollectionProps}></Collection_Preview>
                ))
                }
            </div>
        );
    }
}

export default ShopPage;