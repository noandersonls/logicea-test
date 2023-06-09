'use client';

import styles from './page.module.css';
import { useTheme } from './context/theme';

import Table from './components/Table';

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          LOGICEA MINIMAL TEST
        </p>
        <button type="button" onClick={() => toggleTheme(theme)}>
          Toggle Theme:
          {theme}
        </button>
      </div>
      <div className={styles.center}>
        <Table />
      </div>
    </main>
  );
}
