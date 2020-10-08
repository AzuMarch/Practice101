import React from 'react';
import styles from './index.module.scss';
import CartItem from 'components/cart/CartItem';
import { Link } from 'react-router-dom';


const CartTable = ({items}) => {

    const itemsList = items.map(item => {
        return (
            <CartItem {...item}/>
        )
    })


    return (
        <div className={styles.tableCon}>
            <h2>Items in cart:</h2>
            <table className={styles.table}>
                <tbody>
                    <tr className={styles.headRow}>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Amount</th>
                        <th>Actions</th>
                    </tr>
                    {itemsList}
                </tbody>
            </table>
            <button className={styles.cartBtn}>Checkout</button>
            <Link className={styles.cartBtn} to="/catalog">Go back to Store</Link>
        </div>
    )
}

export default CartTable;