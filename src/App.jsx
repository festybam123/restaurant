import { useState } from 'react'
import Stopchop from './components/Stopchop.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Stopchop />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
