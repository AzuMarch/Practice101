import React from 'react';
import CartLayout from 'components/cart/CartLayout';
import CartList from 'components/cart/CartList';

const Cart = () => {
    return (
        <CartLayout>
            <CartList />
        </CartLayout>
    )
}

export default Cart;