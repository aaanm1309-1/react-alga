import { useState } from "react";

export default function Form(){
  const [form, setForm] = useState({
    name: '',
    lastName: '', 
    email: '',
    password: '',

  })
  // const [name, setName] = useState('Adriano');
  // const [lastName, setLastName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(form)

  }

  function handleInputCange(e: React.ChangeEvent<HTMLInputElement>){
    setForm({...form, [e.target.name]: e.target.value})
  }


  return <div>
          <form onSubmit= {(e => handleSubmit(e))} >
              <input 
                placeholder = "Nome"
                type="text"
                name="name"
                value={form.name}
                // onChange={(e) => setName(e.target.value)}
                // onChange={(e) => setForm({...form, name: e.target.value})}
                onChange={handleInputCange}
              />
              <input 
                placeholder = "SobreNome"
                type="text"
                name="lastName"
                value={form.lastName}
                // onChange={(e) => setName(e.target.value)}
                // onChange={(e) => setForm({...form, lastName: e.target.value})}
                onChange={handleInputCange}
              />
              <input 
                placeholder = "Email"
                type="email"
                name="email"
                value={form.email}
                // onChange={(e) => setEmail(e.target.value)}
                // onChange={(e) => setForm({...form, email: e.target.value})}
                onChange={handleInputCange}
              />
              <input 
                placeholder = "Senha"
                type="password"
                name="password"
                value={form.password}
                // onChange={(e) => setPassword(e.target.value)}
                // onChange={(e) => setForm({...form, password: e.target.value})}
                onChange={handleInputCange}
              />
              <button type="submit">
                Enviar
              </button>
          </form>    
        </div>
}