/* eslint-disable no-loss-of-precision */
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import styles from '../page.module.css';

import {
  deleteJoke, getJokeById, updateJoke,
} from '../api';

export default function JokeForm({ id }) {
  const isNewJoke = id === 'add';
  const router = useRouter();

  const [joke, setJoke] = useState({
    Author: '',
    Body: '',
    Title: '',
    CreatedAt: '',
    Views: '',
  });

  useEffect(() => {
    if (id !== 'newjoke') {
      const getJoke = async () => {
        const targetJoke = await getJokeById(id);
        setJoke(targetJoke);
      };

      getJoke();
    }
  }, []);

  const updateJokeById = async () => {
    const isUpdateSuccess = await updateJoke(id, joke);
    if (isUpdateSuccess) {
      router.push('/jokes');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isNewJoke) {
      // Create New Joke Here
    } else {
      updateJokeById();
    }
  };

  // const createNewJoke = async ( id ) => {
  //   const newId = uuid here
  //   const isCreateSuccess = await createJoke(newId, joke)
  //   if (isCreateSuccess) {
  //     router.push('/jokes')
  //   }
  // }

  const handleDeleteJoke = async () => {
    const isDeleteSuccess = await deleteJoke(id);
    if (isDeleteSuccess) {
      router.push('/jokes');
    }
  };

  const {
    Author, Body, Title,
  } = joke;
  return (
    <div>
      <h1>
        { isNewJoke ? 'Add New Joke' : 'Edit Joke' }
      </h1>
      <form onSubmit={(e) => handleSubmit(e)} className={styles.jokeForm}>
        <label htmlFor="Title">
          Title
          <input
            type="text"
            id="Title"
            name="Title"
            placeholder="Joke Title Here..."
            value={Title}
            onChange={(e) => setJoke({ ...joke, Title: e.target.value })}
          />
        </label>
        <label htmlFor="Body">
          Body
          <textarea
            type="text"
            id="Body"
            rows="4"
            cols="50"
            name="Body"
            placeholder="Body Here..."
            value={Body}
            onChange={(e) => setJoke({ ...joke, Body: e.target.value })}
          />
        </label>
        <label htmlFor="Author">
          Author
          <input
            id="Author"
            type="text"
            name="Author"
            placeholder="Author..."
            value={Author}
            onChange={(e) => setJoke({ ...joke, Author: e.target.value })}
          />
        </label>
        <button type="submit">Submit Joke</button>
      </form>
      { !isNewJoke && (
      <button type="button" style={{ color: 'red' }} onClick={handleDeleteJoke}>
        Delete Joke
      </button>
      )}
    </div>
  );
}
