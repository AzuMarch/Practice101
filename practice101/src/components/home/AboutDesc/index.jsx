import React from 'react';
import styles from './index.module.scss';

const AboutDesc = ({description}) => {

    return (
        <div className={styles.AboutDesc}>
            <h2>About Us</h2>
            <p>{description}</p>
        </div>
    )
}

export default AboutDesc;