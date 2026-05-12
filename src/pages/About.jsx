import { useContext } from "react";
import { AuthContext } from "../AuthContext";

export default function About() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>Acerca</h1>
      <p>Usuario: {user ? user : "No logueado"}</p>
    </div>
  );
}