import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Sing from './Sing';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [Error,setError] = useState({
        email:false,
        password:false,
       })
const Navigate=useNavigate()
const [inpval,setInpval]=useState({
email:"",
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
const getuserArr = localStorage.getItem("userTekisky")
console.log(getuserArr);
const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const passReg = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
if(!regEmail.test(inpval.email)){
    setError({...Error,email:true})
}else if(!passReg.test(inpval.password)){
    setError({...Error,password:true})
}else{
   if(getuserArr && getuserArr.length){
    const userdata = JSON.parse(getuserArr);
    console.log(userdata);
    const userlogin = userdata.filter((el,i)=>{
    return el.email ===inpval.email && el.password === inpval.password
    });
    console.log(userlogin);
    if(userlogin.length ===0){
      alert("invalid details")
    }else{
      alert("user login succesfully");
      localStorage.setItem("user_login",JSON.stringify(userlogin))
      Navigate("/dashboard");
    }
   }
}
}
  return (
  <>
   <div className="container">
    <section className='d-flex justify-content-between'>
    <div className="left-data mt-3 p-3" style={{width:"100%"}}>
    <h3 className='text-center col-lg-5' col-lg-5>Sing In</h3>
    <Form>
    <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
    <Form.Control type="email" onChange={getdata} name="email" placeholder="Enter email" />
        </Form.Group>
         {
            Error.email?
            <div className='error'>Please enter valid email</div>
            :null
        }
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
    <p className='mt-3'>Already Have an Account <span>SingIn</span></p>
    </div>
    <Sing/>
  </section>
    </div>
  </>
  );
};

export default Login;
