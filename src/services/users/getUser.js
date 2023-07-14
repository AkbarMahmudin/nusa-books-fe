const getUser = async (token) => {
  const response = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/api/user`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
    },
  });

  const result = await response.json();

  return {
    ok: response.ok,
    status: response.status,
    ...result,
  };
};

export { getUser };
