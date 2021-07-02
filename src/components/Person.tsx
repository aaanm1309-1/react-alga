import { useState } from "react";

export default function Person() {
  const [person, setPerson] = useState<string>('Adriano');

  setTimeout(() => {
    setPerson((state) => {
      return  "Xuxo"
    })
  },2000)

  return (
    <div>
      <h1>Perfil</h1>
      <p>Este é o perfil de {person}</p>
    </div>

  );
}