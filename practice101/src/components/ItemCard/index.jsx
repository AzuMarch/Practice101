import React from 'react';
import styles from './index.module.scss';
import Card from 'components/Card';
import {
    Link
} from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from 'store/actionCreators';


const ItemCard = ({price, title, img, id, addToCart}) => {
    return (
        <Card className={styles.ItemCard} key={id}>
            <div className={styles.ItemCard}>
                <div>{price} €</div>
                <h5>{title}</h5>
                <img src={img} alt={title}/>
                <Link to={`/view/${id}`} className={styles.viewLink}>Learn more...</Link>
                <button className={styles.CardBtn} onClick={() => addToCart(id)}>Buy</button>
            </div>
        </Card>
    )
}

//funkcija kuri duoda galimybe siusti action'us redux reduceriui
const mapDispatchToProps = dispatch => ({
    addToCart: (id) => dispatch(addToCart(id))
});

export default connect(null, mapDispatchToProps)(ItemCard);
