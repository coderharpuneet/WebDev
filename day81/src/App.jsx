import React, { useState } from 'react'
import ThemeSetter from './components/ThemeSetter';

const App = () => {
  const [theme, setTheme] = useState("light")
  const changeColor=(color)=>{
    setTheme(color);
  }
  return (
    <div>
      <h1>The theme is {theme}.</h1>
      <ThemeSetter changeColor={changeColor}/>
    </div>
  )
}

export default App