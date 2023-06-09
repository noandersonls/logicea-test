'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { logout } from '../api/login';

import styles from '../page.module.css';
import { useTheme } from '../context/theme';

export default function Header() {
  const router = useRouter();

  useEffect(() => {
    if (!window.localStorage.getItem('token')) {
      router.push('/');
    }
  }, []);

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  const { theme, toggleTheme } = useTheme();
  return (
    <div className={styles.description}>
      <p>
        LOGICEA MINIMAL TEST
      </p>
      <button type="button" onClick={() => toggleTheme(theme)}>
        Toggle Theme:
        {theme}
      </button>
      <button type="button" onClick={() => handleLogout()}>Log Out</button>
    </div>
  );
}
