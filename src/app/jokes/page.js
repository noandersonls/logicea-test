'use client';

import styles from '../page.module.css';

import Header from '../components/Header';
import Table from '../components/Table';

export default function Jokes() {
  return (
    <div className={styles.main}>
      <Header />
      <Table />
    </div>
  );
}
