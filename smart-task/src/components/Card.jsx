import React from 'react'

const Card = (props) => {
  return (
    <div  className='h-80 w-90 border-2 flex flex-wrap flex-col'>
     <h1>{props.task.date}</h1>
     <h2>{props.task.taskName}</h2>
     <h3>{props.task.detail}</h3>
    </div>
  )
}

export default Card