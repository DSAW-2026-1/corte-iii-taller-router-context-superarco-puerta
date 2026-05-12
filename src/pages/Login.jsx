import { useState, useContext } from "react";
import { AuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulación de login (credenciales del ejemplo)
    if (email === "admin@gmail.com" && password === "1234") {
      login(email);

      // 🔥 AQUÍ ESTÁ EL ARREGLO
      navigate("/dashboard"); // ✅ antes estaba /home ❌
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <p>Ingresa para acceder a las rutas protegidas.</p>

      <div>
        <label>Correo: </label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label>Contraseña: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button onClick={handleLogin}>Iniciar sesión</button>

      <p><b>Usuario:</b> admin@gmail.com</p>
      <p><b>Contraseña:</b> 1234</p>
    </div>
  );
}