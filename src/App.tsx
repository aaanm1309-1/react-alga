import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';


function App() {

  const [names,setNames] = useState([
    'Aluno 1','Aluno 2',
    'Aluno 3','Aluno 4',
    'Aluno 5'
  ])
  const [toggle,setToggle] = useState(false)

  //useEffect é feito pela primeira vez quando o objeto é montado 
  useEffect(() => {
    console.log('Componente foi montado')
    console.log(names)
    // console.log(toggle)
    // const div = document.createElement('div')
    // div.style.height = '300px'
    // document.body.prepend(div)
    // document.body.append(div)

  // },[names,toggle])

  },[names])

  useEffect(() => {
    console.log('Componente foi montado')
    // console.log(toggle)
    // const div = document.createElement('div')
    // div.style.height = '300px'
    // document.body.prepend(div)
    // document.body.append(div)

  // },[names,toggle])
    return () => {
      console.log('Desmontagem do componente')
    }

  },[])

  // //useEffect é feito pela primeira vez quando o objeto é montado 
  // useEffect(() => {
  //   console.log(toggle)
  //   // const div = document.createElement('div')
  //   // div.style.height = '300px'
  //   // document.body.prepend(div)
  //   // document.body.append(div)

  // },[toggle])

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          { names.map(
            (name,index) => <li key={index}> {name}</li>
          )}
        </ul>
        <button 
          onClick={() => 
          setNames([...names, 'Jeremias'])}
        >
          Adicionar Nome
        </button>
        {/* <button 
          onClick={() => 
          setToggle(!toggle)}
        >
          Alterar Toggle
        </button> */}

        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;
