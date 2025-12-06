import React from 'react'
import Navbar from './navbar.jsx'
import Task from './task_column.jsx'
import "./App.css";
const App = () => {
  return (
    <div className='app'>
      <div className='bg'></div>
      <main>
       <Navbar />
       <Task  />
      </main>
    </div>
  )
}

export default App
