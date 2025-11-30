import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex align-center justify-between p-10'>
     <h1 className='text-[20px]'>Smart Task</h1>
     <div className="flex align-center justify-center gap-20">
          <Link to='/'>Home</Link>
          <Link to='/'>Add Task</Link>
          <Link to='/'>All Tasks</Link>
          <Link to='/'>Notes</Link>
          <Link to='/'>Settings</Link>
     </div>
    </div>
  )
}

export default Navbar