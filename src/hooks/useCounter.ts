import { useEffect, useState } from "react"

export default function useCounter(){

  const  [numero, setNumero] = useState(1)

  useEffect(() => {
    setTimeout(() => {
      setNumero(numero + 1)
    },5000)
  
  })


  return numero


}