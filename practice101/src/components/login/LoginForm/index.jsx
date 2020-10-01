import React from 'react';
import styles from './index.module.scss';
import InputGroup from 'components/InputGroup';
import {
    Link
} from 'react-router-dom';

const LoginForm = () => {
    return (
        <form className={styles.loginForm}>
            <InputGroup title="Email:" type="email" initValue='' onChange='' />
            <InputGroup title="Password:" type="text" initValue='' onChange='' />
            <button>Sign in</button>
            <p>Don't have an account? <Link to="/register">Register here</Link></p>
        </form>
    )
}

export default LoginForm;
