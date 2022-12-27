import React, {useState} from 'react'
import { Button,Card,Table,Form } from 'react-bootstrap';

function Registration() {
const [Error,setError] = useState({
    fName:false,
    lName:false,
    email:false,
    password:false,
    salary:false,
})

// const [fError,setFError] = useState(false)
// const [lError,setLError] = useState(false)
// const [lError,setLError] = useState(false)


const [formData,setFormData] = useState({
    fName:"",
    lName:"",
    email:"",
    password:"",
    salary:"",
})

const handleChange = (o)=>{
    setFormData({...formData,[o.target.name]:o.target.value})
    setError({ fName:false,
        lName:false,
        email:false,
        password:false,
        salary:false,})
}

const handleSubmit =()=>{
const regName = /^[A-Za-z\'`~!^&*()_=+":;?\s\.\,]+$/
const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const passReg = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
const salaryReg = /^[0-9]*$/

    if(!regName.test(formData.fName)){
        setError({...Error,fName:true})
    }else if(!regName.test(formData.lName)){
        setError({...Error,lName:true})
    }else if(!regEmail.test(formData.email)){
        setError({...Error,email:true})
    }else if(!passReg.test(formData.password)){
        setError({...Error,password:true})
    }else if(!salaryReg.test(formData.salary || formData.salary==="" )){
        setError({...Error,salary:true})

    }else{
        console.log("now you are officially a developer...")
    }
    
    
   
}

  return (
    <div className="form">
        <form>
      <Form.Group className="mb-3" >
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name="fName" value={formData.fName} onChange={(o)=>handleChange(o)}  />
      </Form.Group>
        {
            Error.fName?
            <div className='error'>Please enter valid first name</div>
            :null
        }
      <Form.Group className="mb-3" >
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="last name" name="lName" value={formData.lName} onChange={(o)=>handleChange(o)} />
      </Form.Group>
      {
            Error.lName?
            <div className='error'>Please enter valid last name</div>
            :null
        }
      <Form.Group className="mb-3" >
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="email" name="email" value={formData.email} onChange={(o)=>handleChange(o)} />
      </Form.Group>
      {
            Error.email?
            <div className='error'>Please enter valid email</div>
            :null
        }
      <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control type="text" placeholder="password" name="password" value={formData.password} onChange={(o)=>handleChange(o)}/>
      </Form.Group>
      {
            Error.password?
            <div className='error'>Please enter valid password</div>
            :null
        }

      <Form.Group className="mb-3" >
        <Form.Label>Salary</Form.Label>
        <Form.Control type="text" placeholder="salary" name="salary" value={formData.salary} onChange={(o)=>handleChange(o)}/>
      </Form.Group>
      {
            Error.salary?
            <div className='error'>Only numbers are allowed</div>
            :null
        }
      <Button className='btn' onClick={()=>handleSubmit()}> Submit</Button>
      </form>
    </div>
  )
}

export default Registration
