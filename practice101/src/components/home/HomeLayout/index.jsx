import React from 'react';
import styles from './index.module.scss';

const HomeLayout = ({children}) => {

    return (
        <div className={styles.homeLayout}>
            {children}
        </div>
    )
}

export default HomeLayout;