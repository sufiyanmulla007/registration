import React from 'react'
import Cards from './Cards'

function EmployeeList({list,setList,setdata,data,setIsUpdate}) {
  return (
    <div className='list'>
      <Cards list={list} setList={setList} setdata={setdata} data={data} setIsUpdate={setIsUpdate}/>
    </div>
  
  )
}

export default EmployeeList