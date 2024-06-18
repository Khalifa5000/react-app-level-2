
import './App.css';
import {useState} from "react";


function App() {
const [ name, setName] = useState("Mohamed");
const [ age , setAge]  = useState(28);

const [count, setCount] = useState(0);
const [subtraction, setSubtraction] = useState(count);

const changeAge = () => {
  setAge(33)
}

const addCount = () => { 
  setCount(count + 1) ;
 }

 const changeSubtraction = () => {
  addCount
  setSubtraction( count - 1)
 }

  return (
    <>
      <div className="card">
        <h2>My name is {name} </h2>
        <button onClick={ ()=>{ setName("Khalifa")} } >Change name</button>
      </div>

      <div>
        <h2> My age is {age}</h2>
        <button onClick={ changeAge }>Change age</button>
      </div>

      <div>
        <br/>
        <button onClick={addCount}> Count {count} </button>
      </div>

      <div>
        <br/>
        <button onClick={changeSubtraction}> Subtraction {subtraction} </button>
      </div>

    </>
  )
}

export default App
