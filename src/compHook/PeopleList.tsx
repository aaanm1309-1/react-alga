import usePeople from "../hooks/usePeople"

export default function PeopleList(){
  const { people, addPerson} = usePeople();
  
  return <>
    <ul>
      { 
        people.map((people,index) => <li key={index}>{ people}</li>)
      }
      <button onClick={()=> addPerson('teste')}>
        adicionar pessoa
      </button>

    </ul>
  </>
}