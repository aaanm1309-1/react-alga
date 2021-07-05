import logo from './logo.svg';
import './App.css';
import { useReducer } from 'react';


interface InitialState {
  count: number;
}

type Action = {
  type: 'INCREMENT',
  payload: number 
  } | 
  {
  type: |'DECREMENT'
  }

const initialState: InitialState = {
  count: 1
}

function reducer (state: InitialState, action: Action) : InitialState {
  console.log(action)

  if (action.type === 'INCREMENT'){
    return {
      count: state.count + action.payload
    }
   
  } else if (action.type === 'DECREMENT'){
    return {
      count: state.count - 1
    }
  }
  return {
    count: state.count 
  }

}


function App() {

  const [estado, dispatch] = useReducer(reducer, initialState)


 
  return (
    <div className="App2" >
      <header className="App-header">

        <div style={{backgroundColor: 'green'}}>
          { estado.count }
        </div>

        <button
          onClick={() =>{
            dispatch({
              type: 'INCREMENT',
              payload: 2
            })
          }}
        >
            Acrescentar
        </button>
        <button
          onClick={() =>{
            dispatch({
              type: 'DECREMENT'
          })
          }}
        >
            Diminuir
        </button>
       
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;
