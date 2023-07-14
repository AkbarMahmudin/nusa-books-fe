const addBook = async (book) => {
  const response = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/api/books/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token') ?? ''}`,
    },
    body: JSON.stringify(book),
  });

  const result = await response.json();

  return {
    ok: response.ok,
    status: response.status,
    ...result,
  };
};

export { addBook };
