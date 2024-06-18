
import './App.css';
import {useState} from "react";



function App() {
const [ name, setName] = useState("Mohamed");
const [age , setAge] = useState("28");


  return (
    <>
      <div className="card">
        <h2>My name is {name} </h2>
        <button onClick={ ()=>{ setName("Khalifa")} } >Change name</button>

      </div>
      <div>
        <h2> My age is {age}</h2>
        <button onClick={ () => { setAge("33")} }>Change age</button>
      </div>

    </>
  )
}

export default App
