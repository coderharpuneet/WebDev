import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {
  const [theme, setTheme] = useState('light')
  return (
    <div>
      <Navbar theme={theme}>
        <h2>This is Navbar</h2>
        <h3>Bahut acha navbar</h3>
      </Navbar>

    </div>
  ) 
}

export default App