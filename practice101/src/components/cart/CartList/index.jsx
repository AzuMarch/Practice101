import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

const data = [
    {
        id: 0,
        title: "Shoe",
        price: 9.50,
        type: "Formal",
        description: "It's just one shoe Idk",
        img: "http://www.clker.com/cliparts/d/3/6/5/13579371752084257714shoe-hi.png"
    },
    {
        id: 1,
        title: "Shoe2",
        price: 6.90,
        type: "Sport",
        description: "It's another singular shoe",
        img: "https://freepngimg.com/download/adidas_shoes/5-2-adidas-shoes-transparent.png"
    },
    {
        id: 2,
        title: "Shoe3",
        price: 4.40,
        type: "Casual",
        description: "A third shoe of some sort",
        img: "https://pngriver.com/wp-content/uploads/2018/02/download-denim-snikers-shoes-PNG-transparent-images-transparent-backgrounds-PNGRIVER-COM-sneakers-2768263_960_720.png"
    }
]

const dataView = data.map(item => {
    return (
        <div className={styles.cartItem}>
            <img src={item.img}/>
            <span>{item.title}</span>
            <span>{item.price} €</span>
            <Link to="/view">Info...</Link>
        </div>
    )
})

const CartList = ({data}) => {
    return (
        <div className={styles.cartList}>
            {dataView}
        </div>
    )
}

export default CartList;