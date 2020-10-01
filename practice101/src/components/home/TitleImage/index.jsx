import React from 'react';
import styles from './index.module.scss';

const titleImage = ({title}) => {

    return (
        <div className={styles.titleImage}>
            <div className={styles.titleContainer}>
                <h2>{title}</h2>
            </div>
        </div>
    )
}

export default titleImage;