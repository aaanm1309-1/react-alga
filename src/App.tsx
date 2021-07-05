import logo from './logo.svg';
import './App.css';
import useCounter from './hooks/useCounter';
import PeopleList from './compHook/PeopleList';

function App() {

  const number = useCounter(9)
 

 
  return (
    <div className="App">
      <header className="App-header">
        {number}
        <PeopleList/>
        <PeopleList/>
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;
