import React,{useState} from 'react'

function Input() {
    const [ firstName,setFirstName] = useState("")
    const [ lastName,setLastName] = useState("")




const handleAdd = ()=>{
    console.log("firstName:- ",firstName)
    console.log("lastName:- ",lastName)
 
}


  return (
    <div>
      <label>First Name: </label>
      <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)} name="fName" />
      <label>Last Name: </label>
      <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)} name="lName" />
      <br />
      <button onClick={()=>handleAdd()}> Add</button>
    </div>
  )
}

export default Input
