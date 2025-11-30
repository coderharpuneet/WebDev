import React from 'react'
import Card from '../components/Card'

const Tasks = (props) => {
  return (
    <div className='flex gap-20 p-10'>
     {
          props.tasks.map((task,index)=>{
               return <Card task={task} index={index} />
          })
     }
    </div>
  )
}

export default Tasks