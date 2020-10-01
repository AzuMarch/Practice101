import React from 'react';
import styles from './index.module.scss';

const FilterSidebar = ({children}) => {
    return (
        <div className={styles.filterSidebar}>
            <div className={styles.Content}>
            <h2>Filters</h2>
                {children}
            </div>
        </div>
    )
}

export default FilterSidebar;
