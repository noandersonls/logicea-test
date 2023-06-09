'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '../api/login';

function Login() {
  const router = useRouter();
  useEffect(() => {
    const token = window.localStorage.getItem('token');
    console.log(token);
    if (token) {
      router.push('/jokes');
    }
  }, []);

  const handleLogin = () => {
    login();
    if (window.localStorage.getItem('token')) {
      router.push('/jokes');
    }
  };

  return (
    <div>
      <h1>Log In</h1>
      <button type="button" onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
