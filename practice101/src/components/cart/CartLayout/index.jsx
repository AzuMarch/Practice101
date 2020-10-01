import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

const CartLayout = ({children}) => {
    return (
        <div className={styles.cartLayout}>
            {children}
            <Link className={styles.backBtn} to="/catalog">Go back to Store</Link>
        </div>
    )
}

export default CartLayout;