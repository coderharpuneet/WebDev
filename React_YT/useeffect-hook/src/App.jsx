import React, { useEffect, useState } from 'react'

const App = () => {
  // const [num, setNum] = useState(0);
  // const [num2, setNum2] = useState(0);
  // useEffect(()=>{
  //   console.log("use effect is running...");
  // },[num])
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  function aChanging(){
    console.log("A ki value change hogi")

  }
  function bChanging(){
    console.log("B ki value change hogi")
  }
  useEffect(()=>{
    aChanging()
    console.log("a changing")
  },[a])
  useEffect(()=>{
    bChanging()
    console.log("b changing")
  },[b])
  return (
    <div>
      {/* <h1>Num 1 is: {num}</h1>
      <h1>Num 2 is: {num2}</h1>
      <button 
      onDoubleClick={()=>{
        setNum2(num2+1)
      }}
      onClick={()=>{
        setNum(num+1)
      }}
      >Click</button> */}

      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button
      onClick={()=>{
        setA(a+1)
      }}
      >Change A</button>
      <button
      onClick={()=>{
        setA(a+1)
      }}
      >Change B</button>
    </div>
  )
}

export default App