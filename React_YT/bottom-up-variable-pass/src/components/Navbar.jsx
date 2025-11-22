import React from 'react'

const Navbar = (props) => {
  return (
    <div>
     <button
     onClick={()=>{
          props.setTheme('Dark')
     }}
     >Theme change</button>
    </div>
  )
}

export default Navbar