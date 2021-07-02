import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Post from './components/Post';
import { useState } from 'react';

function App() {
  const [post, setPost] = useState({
    title: 'Titulo qualquer',
    content: 'Lorem Ipsum Loreta Lot lau'
  })

  // setTimeout(() =>{
  //   setPost({
  //     title: 'Titulo qualquer 2222',
  //     content: 'Lorem Ipsum Loreta Lot lau'
  //   })
  // },5000)

  return (
    <div className="App">
      <header className="App-header">
        <Sidebar post={post}/>
        <Post post={post} totalComements={12}/>

        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;
