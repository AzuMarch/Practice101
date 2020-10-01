import React from 'react';
import styles from './index.module.scss';

const RegisterLayout = ({children}) => {
    return (
        <div className={styles.registerLayout}>
            {children}
        </div>
    )
}

export default RegisterLayout;
