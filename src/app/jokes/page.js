/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-no-comment-textnodes */

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
