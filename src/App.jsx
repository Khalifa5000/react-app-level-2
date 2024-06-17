
import './App.css'

function App() {
let person = "Mohamed";
const changeName = () => { 
  console.log("object");
  person = "Ahmed "
 }
  return (
    <>
      <div className="card">
        <h2>My name is {person}</h2>
        <button onClick={changeName}>Change name</button>

      </div>

    </>
  )
}

export default App
