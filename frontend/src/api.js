const API_URL = "http://127.0.0.1:8000/api/auth";

async function request(path, data) {
  const res = await fetch(`${API_URL}/${path}/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const json = await res.json();
  if (!res.ok) {
    throw json;
  }
  return json;
}

export function registerUser(data) {
  return request("register", data);
}

export function loginUser(data) {
  return request("login", data);
}

export function resetPassword(data) {
  return request("reset-password", data);
}
