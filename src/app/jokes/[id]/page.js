'use client';

import { useRouter } from 'next/navigation';
import JokeForm from '../../components/JokeForm';

import styles from '../../page.module.css';

export default function Form({ params }) {
  const router = useRouter();
  return (
    <div className={styles.main}>
      <button className={styles.goBack} type="button" onClick={() => router.push('/jokes')}>Go Back</button>
      <JokeForm id={params.id} />
    </div>
  );
}
