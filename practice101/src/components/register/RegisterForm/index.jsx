import React from 'react';
import styles from './index.module.scss';
import InputGroup from 'components/InputGroup';

const RegisterForm = () => {
    return (
        <form className={styles.registerForm}>
            <InputGroup title="Email:" type="email" initValue='' onChange='' />
            <InputGroup title="Username:" type="email" initValue='' onChange='' />
            <InputGroup title="Password:" type="text" initValue='' onChange='' />
            <InputGroup title="Confirm password:" type="email" initValue='' onChange='' />
            <button>Register</button>
        </form>
    )
}

export default RegisterForm;
