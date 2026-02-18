import React, { useState } from 'react'

const ThemeSetter = ({changeColor}) => {
     const [color, setColor] = useState("light")
     const handleSubmit = (e)=>{
          e.preventDefault()
          changeColor(color)
          
     }
  return (
    <div>
     <form onSubmit={handleSubmit

     }>
          <input 
          type="text" 
          placeholder='Enter theme' value={color}
          onChange={(e)=> setColor(e.target.value)}
          />
          <button>Submit</button>
     </form>
    </div>
  )
}

export default ThemeSetter