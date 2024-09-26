import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Service from './components/Service/Service'
import Title from './components/Title/Title'

const App = () => {
  return (
    <div>
      <Navbar/> 
      <div className='container'>
        <Title/>
        <Service/>
      </div>
    </div>
  )
}

export default App
