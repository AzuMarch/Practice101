import React from 'react';
import styles from './index.module.scss';

const ViewLayout = ({children}) => {
    return (
        <div className={styles.viewLayout}>
            {children}
        </div>
    )
}

export default ViewLayout;