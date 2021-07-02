import { useEffect, useState } from "react";

export default function Clock(){

  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
      setInterval(() => {
        setDate(new Date())
      },1000)

    },[]

  )

  return <div>
    <h1>Hoje: {date.toLocaleDateString()}</h1>
    <h2>agora: {date.toLocaleTimeString()}</h2>
  </div>
}