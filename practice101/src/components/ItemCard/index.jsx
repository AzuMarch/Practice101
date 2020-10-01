import React from 'react';
import styles from './index.module.scss';
import Card from 'components/Card';
import {
    Link
} from 'react-router-dom';

const ItemCard = ({price, title, description, img, id}) => {
    return (
        <Card className={styles.ItemCard}>
            <div className={styles.ItemCard}>
                <div>{price} €</div>
                <h5>{title}</h5>
                <img src={img} alt={title}/>
                <Link to="/view" className={styles.viewLink}>Learn more...</Link>
                <button className={styles.CardBtn}>Buy</button>
            </div>
        </Card>
    )
}

export default ItemCard;
