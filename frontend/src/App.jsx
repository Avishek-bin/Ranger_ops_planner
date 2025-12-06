import React from 'react'
import { Routes, Route } from "react-router-dom";

import Navbar from './navbar.jsx'
import Task from './task_column.jsx'

import Login from './Login.jsx'
import Signup from './Signup.jsx'

import "./App.css";

const App = () => {
  return (
    <div className='app'>
      <div className='bg'></div>

      <main>
        <Routes>
          <Route 
            path="/"
            element={
              <>
                <Navbar />
                <Task />
              </>
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
