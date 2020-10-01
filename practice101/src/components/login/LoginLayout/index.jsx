import React from 'react';
import styles from './index.module.scss';

const LoginLayout = ({children}) => {
    return (
        <div className={styles.loginLayout}>
            {children}
        </div>
    )
}

export default LoginLayout;
