const logout = async (token) => {
  const response = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/api/user/logout`, {
    method: 'DELETE',
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
}

export { logout };
