import React from 'react';
import styles from './index.module.scss';
import {
    Link
} from 'react-router-dom';

const StoreLink = () => {

    return (
        <div className={styles.storeLink}>
            <Link to="/catalog">Check out our products here</Link>
        </div>
    )
}

export default StoreLink;