import React from 'react';
import Collection_Item from '../collection-item/collection.item';
import './collection_preview.scss';

const Collection_Preview = ({title,items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
            .filter((item,idx) => idx < 4)
            .map((items) => (
                <Collection_Item key={items.id} item = {items} />
            ))}
        </div>
    </div>
);

export default Collection_Preview;