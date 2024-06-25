
import './App.css';
import {useState} from "react";


function App() {
const [ name, setName] = useState("Mohamed");
const [ age , setAge]  = useState(35);

const [count, setCount] = useState(0);
const [subtraction, setSubtraction] = useState(count);
const [theme, setTheme] = useState("")

// const changeAge = () => {
//   setAge(33)
// }
// const resetAge = () => {
//   setAge(28)
// }

const addCount = () => { 
  setCount(count + 1) ;
 }

 const changeSubtraction = () => {
  addCount
  setSubtraction( count - 1)
 }

  return (
    <div className={`App ${theme}`}>
      <div className="card">
        <button  onClick ={() =>{setTheme("light")}} style={{marginRight: "26px" }}>Light</button>
        <button  onClick ={() =>{setTheme("dark")}} style={{marginRight: "26px"}}>Dark</button>
        <button  onClick ={() =>{setTheme("grey")}} style={{marginRight: "26px"}}>Grey</button>
        <button  onClick ={() =>{setTheme("pink")}}>Pink</button>
      </div>
        <div>
        <h2>My name is {name} </h2>
        <button onClick={ ()=>{ setName("Mohamed Khalifa")} } >Change name</button>
        <button onClick={ ()=>{ setName("Mohamed")} } >Reset name</button>
        </div>
      <div>
        <h2> My age is {age}</h2>
        <button onClick={ ()=> {setAge(43) }}>Change age</button>
        <button onClick={()=> { setAge(35) }}>Rsset age</button>
      </div>

      <div>
        <br/>
        <button onClick={addCount}> Count {count} </button>
      </div>

      <div>
        <br/>
        <button onClick={changeSubtraction}> Subtraction {subtraction} </button>
      </div>

    </div>
  )
}

export default App
