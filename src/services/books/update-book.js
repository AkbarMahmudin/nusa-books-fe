const updateBook = async (id, data) => {
  delete data.id;
  const response = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/api/books/${id}/edit`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify(data)
  });

  const result = await response.json();

  return {
    ok: response.ok,
    status: response.status,
    ...result
  };
};

export { updateBook };
