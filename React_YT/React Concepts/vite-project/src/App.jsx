import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user="Sidak Singh" age={19} />
      <Card user="Karan Singh Ahluwalia" age={20} />
      <Card user="Hello" age={25} />
    </div>
  )
}

export default App;