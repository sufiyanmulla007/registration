import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Sing from './Sing';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const [Error,setError] = useState({
        name:false,
        email:false,
        password:false,
       })
       const Registration=useNavigate()   
const [inpval,setInpval]=useState({
name:"",
email:"",
date:"",
password:"",
})
const [data,setData]=useState([]);
console.log(inpval);
const getdata=(e)=>{
//  console.log(e.target.value);
// object destructuring
const {value,name} =e.target;
// console.log(value,name);
setError({ fName:false,
    name:false,
    email:false,
    password:false,
    })
setInpval(()=>{
    return{
        ...inpval,[name]:value
    }
})
}
const AddData=(e)=>{
 e.preventDefault();
//  console.log(inpval);
const regName = /^[A-Za-z\'`~!^&*()_=+":;?\s\.\,]+$/
const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const passReg = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
if(!regName.test(inpval.name)){
    setError({...Error,name:true})
}else if(!regEmail.test(inpval.email)){
    setError({...Error,email:true})
}else if(!passReg.test(inpval.password)){
    setError({...Error,password:true})
}else{
    alert("now you are officially a developer...")

    localStorage.setItem("userTekisky",JSON.stringify([...data,inpval]));
    Registration("/login");
}
}
  return (
    <>
    <div className="container">
    <section className='d-flex justify-content-between'>
    <div className="left-data mt-3 p-3" style={{width:"100%"}}>
    <h3 className='text-center col-lg-5' col-lg-5>Sing Up</h3>
    <Form>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
       
        <Form.Control type="text" onChange={getdata} name="name" placeholder="Enter Name" />
        </Form.Group>
        {
            Error.name?
            <div className='error'>Please enter valid first name</div>
            :null
        }
        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
       
        <Form.Control type="email" onChange={getdata} name="email" placeholder="Enter email" />
        </Form.Group>
        {
            Error.email?
            <div className='error'>Please enter valid email</div>
            :null
        }
        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
       
        <Form.Control type="date" onChange={getdata} name="date" />
        </Form.Group>
        {/* {
            Error.date?
            <div className='error'>Please enter valid date</div>
            :null
        } */}

      <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
    <Form.Control type="password" onChange={getdata} name="password" placeholder="Password" />
      </Form.Group>
      {
            Error.password?
            <div className='error'>Please enter valid password</div>
            :null
        }
      <Button variant="primary" type="submit" onClick={AddData} className='btn col-lg-6'>
        Submit
      </Button>
    </Form>
    <p className='mt-3'>Already Have an Account <span> <NavLink to="/Login">SingIn</NavLink></span></p>
    </div>
    <Sing/>
  </section>
    </div>
    </>
  );
};

export default Home;
