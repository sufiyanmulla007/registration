import React from 'react'
import { Button,Card,Table } from 'react-bootstrap';

function Cards({list, setList,setdata, data,setIsUpdate}) {

  const handleDelete =(index)=>{
    let arr = [...list]
      arr.splice(index,1)
      setList([...arr])
    }


  const handleUpdate = (item,index)=>{
    setIsUpdate(true)
    setdata({...item,ind:index})
  }  

  return (
    <Table striped bordered hover variant="dark">
    <thead>
      <tr>
      
        <th>First Name</th>
        <th>Last Name</th>
        <th>Salary</th>
        <th>Address</th>
        <th>Designation</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>

      {list.map((item,index)=>(

      <tr key={index}>
        <td>{item.fName}</td>
        <td>{item.lName}</td>
        <td>{item.salary}</td>
        <td>{item.address}</td>
        <td>{item.desig}</td>
        <td>
        <Button onClick={()=>handleUpdate(item,index)}>update</Button> 
        <Button onClick={()=>handleDelete(index)}>delete</Button>
        </td>
        
      </tr>
      ))}
      
    </tbody>
  </Table>
  )
}

export default Cards
