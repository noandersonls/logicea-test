/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-no-comment-textnodes */

'use client';

import { useState, useEffect } from 'react';
import { getJokes } from '../api/index';
import styles from '../page.module.css';

export default function Table() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    getJokes({ page: 1, limit: 10 }).then((jokesResponse) => setJokes(jokesResponse));
  }, []);

  return (
    <main>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Created Date</th>
            <th>Views</th>
          </tr>
        </thead>
        <tbody>
          {jokes.map(({
            Title, Author, CreatedAt, Views,
          }) => (
            <tr>
              <td>{Title}</td>
              <td>{Author}</td>
              <td>{CreatedAt}</td>
              <td>{Views}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.bottomBar}>
        <button type="button" className="previous-button">
          {'<'}
        </button>
        <div className="dropdown">
          <label htmlFor="items">Jokes per page:</label>
          <select id="items">
            <option value="5">5</option>
            <option value="10">10</option>
          </select>
        </div>
        <button type="button" className="next-button">
          {'>'}
        </button>
      </div>
    </main>
  );
}
