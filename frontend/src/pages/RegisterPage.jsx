import { useState } from "react";
import { registerUser } from "../api";

export default function RegisterPage() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await registerUser(form);
      setMessage(res.message || "Kayıt başarılı");
    } catch (err) {
      setMessage(err.error || "Hata oluştu");
    }
  };

  return (
    <div>
      <h2>Kullanıcı Kayıt Ekranı</h2>
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
          <label>E-posta</label><br />
          <input
            name="email"
            value={form.email}
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

        <button type="submit">Kayıt Ol</button>
      </form>

      {message && <p style={{ marginTop: 10 }}>{message}</p>}
    </div>
  );
}
