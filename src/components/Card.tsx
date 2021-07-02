// import { PropsWithChildren, ReactNode } from "react"
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
  return <C.Wrapper align={props.align}>
      <C.Title>{props.title}</C.Title>
      { props.children}
      <br />
      <div>
        <Button 
            onClick={() => alert('Clicado')}
            initializeClicked={props.initializeClicked}    
        >
          Ver mais
        </Button>
      </div>
  </C.Wrapper>
}