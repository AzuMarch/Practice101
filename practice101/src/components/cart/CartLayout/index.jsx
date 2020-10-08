import React from 'react';
import styles from './index.module.scss';

const CartLayout = ({children}) => {
    return (
        <div className={styles.cartLayout}>
            {children}
        </div>
    )
}

export default CartLayout;