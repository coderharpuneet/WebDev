import React, { useEffect, useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);
  useEffect(()=>{
    console.log("use effect is running...");
  },[num])
  return (
    <div>
      <h1>Num 1 is: {num}</h1>
      <h1>Num 2 is: {num2}</h1>
      <button 
      onDoubleClick={()=>{
        setNum2(num2+1)
      }}
      onClick={()=>{
        setNum(num+1)
      }}
      >Click</button>
    </div>
  )
}

export default App