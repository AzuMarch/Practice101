import React from 'react';
import styles from './index.module.scss';

const ResultBar = ({count, sortOrder, onSortOrderChange}) => {

    const order = sortOrder ?? 'a-z';
    return (
        <div className={styles.resultBar}>
            <h2>"Shoes" - {count} results found</h2>
            <div className={styles.selectBox}>
                <span className={styles.selectTitle}>Sort by:</span>
                <select value={order} onChange={(e) => onSortOrderChange(e.target.value)}>
                    <option value="a-z">A-Z</option>
                    <option value="z-a">Z-A</option>
                    <option value="price-asc">Price Asc.</option>
                    <option value="price-desc">Price Desc.</option>
                    <option value="rating">Rating</option>
                </select>
            </div>
        </div>
    )
}

export default ResultBar;