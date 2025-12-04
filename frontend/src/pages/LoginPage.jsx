import { useState } from "react";
import { loginUser } from "../api";

export default function LoginPage() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await loginUser(form);
      setMessage(`Giriş başarılı. Token: ${res.token}`);
      localStorage.setItem("authToken", res.token);
    } catch (err) {
      setMessage(err.error || "Giriş başarısız");
    }
  };

  return (
    <div>
      <h2>Kullanıcı Giriş Ekranı</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Kullanıcı Adı</label><br />
          <input
            name="username"
            value={form.username}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Şifre</label><br />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Giriş Yap</button>
      </form>

      {message && <p style={{ marginTop: 10 }}>{message}</p>}
    </div>
  );
}
