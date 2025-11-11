import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0);
  let inc=()=>{
    setNum(num+1) // we cannot use num++ or um-- here
  }
  let dec=()=>{
    setNum(num-1)
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
    </div>
  )
}

export default App