const register = async (data) => {
  const response = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/api/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  return result;
};

export { register };
