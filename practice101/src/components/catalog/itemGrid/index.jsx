import React from 'react';
import styles from './index.module.scss';
import ItemCard from 'components/ItemCard';
import uniqid from 'uniqid';

const ItemGrid = ({items}) => {

    const itemCards = items.map(item => <ItemCard {...item} key={uniqid()} />)
    return (
        <div className={styles.ItemGrid}>
            {itemCards}
        </div>
    )
}

export default ItemGrid;
