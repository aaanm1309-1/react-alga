import logo from './logo.svg';
import './App.css';
import useCounter from './hooks/useCounter';
import PeopleList from './compHook/PeopleList';
import { useEffect, useRef } from 'react';

function App() {

  const number = useCounter(9)

  const counter = useRef(2)

  const div1 = useRef<HTMLDivElement>(null)


  useEffect(() => {
    setTimeout(() => {
      counter.current = 6
      console.log('o valour de counter foi alterado')
      console.log(div1.current)
      if (div1.current) {
        div1.current.style.backgroundColor ='green'
      }

    },2000)

  },[counter])

  
 

 
  return (
    <div className="App2" ref={div1}>
      <header className="App-header">
        {number}
        <div style={{backgroundColor: 'peachpuff'}}>
          {counter.current}
        </div>
        <PeopleList/>
        <PeopleList/>
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;
