import React from 'react'

function List({list}) {
    // const arr = ["sam","afzal","arsalan","wajju","awes"]

  return (
    <div className='list'>
        <span>List</span>
        {list.map((item,index)=>(
       <div key={index}>{item}</div>
        ))}
        
    </div>
  )
}

export default List