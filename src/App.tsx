import logo from './logo.svg';
import ScrollableBox, { ScrollableRef } from './compHook/ScrollableBox';
import { useCallback, useEffect, useRef, useState } from 'react';




function App() {
  
  const boxRef = useRef<ScrollableRef>(null);

  const [content, setContent] = useState<string>();
  const [postId, setpostId] = useState<number>(1);

  const fecthData = useCallback(async function () {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

    const data = await response.json();

    setContent(data.body);

  },[postId]
  )
  
  useEffect(() => {
    fecthData()
    // .then(() => setContent('Aiai'))
  },[fecthData])

 
  return (
    <div className="App2" >
      <header className="App-header">

        <ScrollableBox ref={boxRef} width={320} height={320} >
           <p> 
             { content  || 'carregando'}
           {/* Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
           There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. */}
           </p>
         </ScrollableBox>       
         <button onClick={() =>{
            boxRef.current?.scrollToBottom()
             setpostId(2)
            }}>
            descer
         </button>
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;
