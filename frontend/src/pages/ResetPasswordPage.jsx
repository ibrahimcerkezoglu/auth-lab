import { useState } from "react";
import { resetPassword } from "../api";

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await resetPassword({ email });
      setMessage(res.message + " (demo kod: " + res.reset_code_demo + ")");
    } catch (err) {
      setMessage(err.error || "Hata oluştu");
    }
  };

  return (
    <div>
      <h2>Şifre Sıfırlama Ekranı</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>E-posta</label><br />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit">Sıfırlama Bağlantısı Gönder</button>
      </form>

      {message && <p style={{ marginTop: 10 }}>{message}</p>}
    </div>
  );
}
