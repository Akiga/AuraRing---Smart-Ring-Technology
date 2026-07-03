const API_URL = import.meta.env.VITE_API_URL;

export const subscribe = async (email) => {
  const response = await fetch(`${API_URL}/subscribe`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  const data = await response.json();

  return {
    ok: response.ok,
    data,
  };
};