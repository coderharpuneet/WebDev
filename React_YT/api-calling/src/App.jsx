import React, { useState } from 'react'
import axios from 'axios';
const App = () => {
  const [data, setData] = useState([]);
  // const getData= async ()=>{
  //   const response=await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   const data=await response.json();
  //   console.log(data);
  // }
  const getData=async ()=>{
    const response=await axios.get('https://jsonplaceholder.typicode.com/todos');
    setData(response.data)
  }
  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {
          data.map((elem,idx)=>{
            return <div>Hello {elem.title} key= {idx}</div>
          })
        }
      </div>
    </div> 
  )
}

export default App