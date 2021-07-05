import logo from './logo.svg';
import './App.css';


function App() {

  const names = ['Aluno 1','Aluno 2','Aluno 3','Aluno 4','Aluno 5']

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          { names.map(
            (name,index) => <li key={index}> {name}</li>
          )}
        </ul>

        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;
