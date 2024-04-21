/* eslint-disable no-unused-vars */


import { useState ,useCallback} from 'react'
import './App.css'

function App() {
  
  const [length, setlength] = useState(8);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [characterAllowed ,setCharAllowed] = useState(false);
  const [password,setPassword] = useState("");

  // eslint-disable-next-line no-undef
  const passwordGenerator=useCallback(
    () =>{
      let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy"

    if (numberAllowed) str += "0123456789"
    if (numberAllowed) str += "!@#$%^&*()+={}~`"
      
    },[length,numberAllowed,characterAllowed,setPassword]
    
  )
  

  return (
    <>
      <h1 className=" text-4xl text-center text-white">Password Generator</h1>
    </>
  )
}

export default App
