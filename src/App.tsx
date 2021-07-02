import logo from './logo.svg';
import './App.css';
import Post from './components/Post';
import { useState } from 'react';
import Card from './components/Card';

function App() {
  const [post ] = useState({
    title: 'Titulo qualquer',
    content: 'Lorem Ipsum Loreta Lot lau'
  })

  return (
    <div className="App">
      <header className="App-header">
      <Card title='Cartão Controle' >
          <Post post={post}  totalComements={12}/>
        </Card>
        <br />
        <Card title='Cartão Controle' align='right'>
          <Post post={post}  totalComements={12}/>
        </Card>
        <br />
        <Card title='Cartão Controle' align='left'>
          <Post post={post}  totalComements={12}/>
        </Card>
        <br />
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;
