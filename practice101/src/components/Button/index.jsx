import React from 'react';
import styles from './index.module.scss';

const Button = ({children, color, onClick}) => {

    const buttonColor = color ?? 'Primary';

    return (
        <div className={`${styles.Btn} ${styles[buttonColor]}`} onClick={onClick}>
            {children}
        </div>
    )
}

export default Button;
