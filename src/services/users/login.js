const login = async ({ email, password }) => {
  const response = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/api/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
 
  const result = await response.json();
  
  return {
    ok: response.ok,
    status: response.status,
    ...result,
  };
}

export { login };
