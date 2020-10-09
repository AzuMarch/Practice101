import React from 'react';
import styles from './index.module.scss';

const CatalogLayout = ({children}) => {
    return (
        <div className={styles.CatalogContainer}>
            <div className={styles.GridLayout}>
                {children}
            </div>
        </div>
    )
}

export default CatalogLayout;
