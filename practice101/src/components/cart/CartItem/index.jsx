import React from 'react';
import styles from './index.module.scss';
import { connect } from 'react-redux';
import { removeFromCart } from 'store/actionCreators';
import {remove} from 'react-icons-kit/fa/remove';
import { Icon } from 'react-icons-kit';


const BasketItem = ({title, price, id, purchaseAmount, removeFromCart }) => {
    return (
        <tr id={id}>
            <td>{id}</td>
            <td>{title}</td>
            <td>{price}</td>
            <td>{purchaseAmount}</td>
            <td id={id} className={styles.remove} onClick={()=>removeFromCart(id)}><Icon size={30} icon={remove} /></td>
        </tr>
    )
}

const mapDispatchToProps = dispatch => ({
    removeFromCart: (id) => dispatch(removeFromCart(id))
});

export default connect(null, mapDispatchToProps)(BasketItem);