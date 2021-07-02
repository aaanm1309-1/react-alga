import logo from './logo.svg';
import './App.css';
import Post, { PostObject } from './components/Post';
import { useState } from 'react';
import Card from './components/Card';

function App() {
  const [post, setPost ] = useState<PostObject|undefined>({
    title: 'Titulo qualquer',
    content: 'Lorem Ipsum Loreta Lot lau'
  })

  return (
    <div className="App">
      <header className="App-header">
        { !!post ? 
            <>
              <Card title='Cartão Controle' >
                <Post post={post}  totalComements={12}/>
              </Card>
              <br />
            </>
          : <h1>404 - Post não encontrado</h1>
        }
        <button onClick={() => setPost(undefined)}>
          Remover Post
        </button>
        { !!post ? 
            <>
              <Card title='Cartão Controle' 
                  align='right'
                  initializeClicked={true}>
                <Post post={post}  totalComements={12}/>
              </Card>
              <br />
            </>
          : null
        }

        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;
