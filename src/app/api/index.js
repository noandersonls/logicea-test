/* eslint-disable no-console */

// Example of clean fetch handling
export const getJokes = async ({
  page, limit,
}) => {
  const data = await fetch(
    `https://retoolapi.dev/zu9TVE/jokes?_page=${page}&_limit=${limit}`,
  ).then((response) => {
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    return response.json();
  })
    .catch((error) => console.error(error));

  return data;
};

export const getJokeById = async (id) => {
  const data = await fetch(`https://retoolapi.dev/zu9TVE/jokes/${id}`).then(
    (response) => response.json(),
  );

  return data;
};

export const deleteJoke = async (id) => {
  const data = await fetch(`https://retoolapi.dev/zu9TVE/jokes/${id}`, {
    method: 'DELETE',
  }).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP Error DELETE: ${response.status}`);
    }
    return response.json();
  });
  return data;
};

export const updateJoke = async (id, joke) => {
  const data = await fetch(`https://retoolapi.dev/zu9TVE/jokes/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(joke),
  }).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP Error PUT: ${response.status}`);
    }
    return response.json();
  });
  return data;
};

export const createJoke = async (joke) => {
  const data = await fetch('https://retoolapi.dev/zu9TVE/jokes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(joke),
  }).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP Error POST: ${response.status}`);
    }
    return response.json();
  })
    .catch((error) => console.error(error));

  return data;
};
