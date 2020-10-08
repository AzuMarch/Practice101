import React from 'react';
import ViewLayout from 'components/view/ViewLayout';
import ViewCard from 'components/view/ViewCard';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectItemsById } from 'store/selectors.js';
import { addToCart } from 'store/actionCreators.js';

const View = ({selectItemsById, addToCart}) => {
    let {itemId} = useParams();

    //console.log(selectItemsById(Number(itemId)));
    //const {id, title, price, description, img} = selectItemsById(Number(itemId));
    return (
        <ViewLayout>
            <ViewCard data={selectItemsById(Number(itemId))} />
        </ViewLayout>
    )
}

const mapStateToProps = (store) =>({
    selectItemsById: id => selectItemsById(store, id)
})

const mapDispatchToProps = dispatch => ({
    addToCart: (id) => dispatch(addToCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(View);