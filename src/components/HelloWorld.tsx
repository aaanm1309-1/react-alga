export default function HelloWorld() {
  const name = "Daniel"
  const title = <h1>Hello {name}!!!</h1>
  const index = 0
  if (name === "Daniel") {
    return (
      <div>
        <h1 tabIndex={index} 
        style={{ background: 'red'}}>
          Meu Nome</h1>

      </div>)  
  } else {
  return (
    <div>
      {title}
    </div>
    )}
}