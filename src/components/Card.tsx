// import { PropsWithChildren, ReactNode } from "react"
import { useState } from "react"
import { PropsWithChildren } from "react"
import Button from "./Button"
// import './Card.css';
import * as C from './Card.styles'

type CardProps = 
      PropsWithChildren< {
        title?: string,
        align?: 'center' | 'left' |
                'right',
        initializeClicked?: boolean
      }>


export default function Card(props: CardProps){

  const [showButton, setShowButton] = useState(true)

  return <C.Wrapper align={props.align}>
      <C.Title>{props.title}</C.Title>
      { props.children}
      <br />
      <div>
        { showButton && 
          <Button 
          onClick={() => setShowButton(false)}
          initializeClicked={props.initializeClicked}    
          >
            Ver mais
          </Button>
        }
      </div>
  </C.Wrapper>
}