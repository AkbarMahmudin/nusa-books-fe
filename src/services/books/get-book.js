const getBook = async (id) => {
  const response = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/api/books/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

  const result = await response.json();

  return {
    ok: response.ok,
    status: response.status,
    ...result,
  };
};

export default getBook;
