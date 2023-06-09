export const getJokes = async ({
  page, limit,
}) => {
  const data = await fetch(
    `https://retoolapi.dev/zu9TVE/jokes?_page=${page}&_limit=${limit}`,
  ).then((response) => response.json());

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
  }).then((response) => response.json());
  console.log(data);
  return data;
};
