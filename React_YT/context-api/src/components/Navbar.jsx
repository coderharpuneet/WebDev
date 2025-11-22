import React, { useContext } from 'react'
import Nav2 from './Nav2'

const Navbar = (props) => {
     const [data]=useContext('ThemeDataContext')
  return (
    <div className='nav'>
     <h2>{data}</h2>
     <h2>{props.children[0]}</h2>
     <Nav2 theme={props.theme} />
    </div>
  )
}

export default Navbar