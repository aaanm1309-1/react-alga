import { useEffect, useState } from "react"

export default function useCounter(numEntrada: number = 1){

  const  [numero, setNumero] = useState(numEntrada)

  useEffect(() => {
    setTimeout(() => {
      setNumero(numero + 1)
    },5000)
  
  },[])


  return numero


}