'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import { getJokes } from '../api/index';
import styles from '../page.module.css';

// TO - DO
// Pagination and limits to use next, prev button and limit dropdown.

const viewsColor = (views) => {
  // Switch case?
  if (views <= 25) return 'tomato';
  if (views <= 50) return 'orange';
  if (views <= 75) return 'yellow';
  if (views <= 100) return 'green';
  return 'black';
};

export default function Table() {
  const [jokes, setJokes] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getJokes({ page: 1, limit: 10 }).then((jokesResponse) => setJokes(jokesResponse));
  }, []);

  return (
    <div className={styles.tableJokes}>
      <button type="button" onClick={() => router.push('/jokes/add')}>Add New Joke</button>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Created Date</th>
            <th>Views</th>
          </tr>
        </thead>
        { jokes.length ? (
          <tbody>
            {jokes.map(({
              id, Title, Author, CreatedAt, Views,
            }) => (
              <tr key={id}>
                <td>
                  <Link href={`/jokes/${id}`}>{Title}</Link>
                </td>
                <td>{Author}</td>
                <td>{CreatedAt}</td>
                <td style={{ color: viewsColor(Views) }}>{Views}</td>
              </tr>
            ))}
          </tbody>
        ) : <tbody><tr><td>Loading...</td></tr></tbody>}
      </table>
      <div className={styles.bottomBar}>
        <button type="button" className="previous-button">
          {'<'}
        </button>
        <div className="dropdown">
          <label htmlFor="items">
            Jokes per page:
            <select id="items">
              <option value="5">5</option>
              <option value="10">10</option>
            </select>
          </label>
        </div>
        <button type="button" className="next-button">
          {'>'}
        </button>
      </div>
    </div>
  );
}
