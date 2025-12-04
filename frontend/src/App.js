import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: 20 }}>
        <h1>Authentication Modülü</h1>

        <nav style={{ marginBottom: 20 }}>
          <Link to="/register" style={{ marginRight: 10 }}>Kayıt Ol</Link>
          <Link to="/login" style={{ marginRight: 10 }}>Giriş Yap</Link>
          <Link to="/reset-password">Şifre Sıfırla</Link>
        </nav>

        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="*" element={<LoginPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
