import React from 'react';
import CartTable from 'components/cart/CartTable';
import CartLayout from 'components/cart/CartLayout';
import { connect } from 'react-redux';

const Cart = ({initItems}) => {

    return (
        <CartLayout>
            <CartTable items={initItems}/>
        </CartLayout>
    )
}

const mapStateToProps = (state) => ({
    initItems: state.cart.items,
});

export default connect(mapStateToProps)(Cart);