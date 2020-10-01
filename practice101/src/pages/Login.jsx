import React from 'react';
import LoginLayout from 'components/login/LoginLayout';
import LoginForm from 'components/login/LoginForm';

const Login = () => {
    return (
        <LoginLayout>
            <h2>Sign In</h2>
            <LoginForm />
        </LoginLayout>
    )
}

export default Login;