import { useContext } from "react";
import { AuthContext } from "../AuthContext";

export default function Home() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>Inicio</h1>
      <p>Usuario: {user ? user : "No logueado"}</p>
    </div>
  );
}