import {getDatabase,ref,set} from "firebase/database";
import {app} from "./firebase";
import './App.css'

const db=getDatabase(app);
function App() {

  const putData=()=>{
    set(ref(db,'users/suraj'),{
      id:1,
      name:"suraj",
      age:21,
    });
  };
  return (
    <>
      <h1>firebase react app</h1>
      <button onClick={putData}>Put Data</button>
    </>
  )
}

export default App
