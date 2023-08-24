import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function App() {
  const [inc,setInc]=useState(0)
  const [dec,setDec]=useState(0)
  const [user, setUser] = useState([]);
  

 function increment(){
setInc(inc+2)
 }
 function decrement(){
  setDec(dec-5)}

  useEffect(() => {
    fetchdata();
  }, []);
  let fetchdata = async () => {
    try {
      let a = await axios.get(`https://api.postalpincode.in/pincode/600001`)
    setUser((a.data[0].PostOffice))
    console.log(a.data[0].PostOffice);
    } catch (error) {
      console.log(error);
    }
  };

 
  return (
    <>
    <h1>Answer 1</h1>
    <tr>
      <th>Name</th>
      <th>Pincode</th>
    </tr>
   
   {user.map((e,i)=>{
    return(
      <>
       <tr>
      <td>{ e.Name}</td>
      <td>{ e.Pincode}</td>
      </tr>
      </>
    )
   
    })}
    <h1>Answer 2</h1>
    <h1>+ Button & - Button  & value</h1>
    <div>
      <button onClick={increment}>+ 2 INCREMENT </button>
      <h2>{inc}</h2>
      <button onClick={decrement}>- 5 DECREMENT </button>
      <h2>{dec}</h2>
    </div>
    </>
  )
}

export default App