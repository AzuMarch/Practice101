import React from 'react';
import styles from './index.module.scss';

const ViewBox = ({data}) => {
    return (
        <div className={styles.viewBox}>
            <div className={styles.imageContainer}>
                <img src={data.img} alt={data.title}/>
                <div className={styles.imageCarousel}>
                    <img src={data.img} alt={data.title}/>
                    <img src={data.img} alt={data.title}/>
                    <img src={data.img} alt={data.title}/>
                </div>
            </div>
            <div className={styles.infoContainer}>
                <h5>{data.title}</h5>
                <p>{data.description}</p>
                <div className={styles.priceAndBuy}>
                    Price:<div className={styles.viewPrice}>{data.price} €</div>
                    <button className={styles.viewBtn}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ViewBox;