import React from 'react';
import RegisterLayout from 'components/register/RegisterLayout';
import RegisterForm from 'components/register/RegisterForm';

const Register = () => {
    return (
        <RegisterLayout>
            <h2>Register a new account</h2>
            <RegisterForm />
        </RegisterLayout>
    )
}

export default Register;