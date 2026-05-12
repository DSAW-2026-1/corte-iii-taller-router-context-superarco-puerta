import { useContext } from "react";
import { AuthContext } from "../AuthContext";

export default function Contact() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>Contacto</h1>
      <p>Usuario: {user ? user : "No logueado"}</p>
    </div>
  );
}