import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
//import our pages
import Home from './containers/Home/Home'
import Books from './containers/Books/Books'
//import common elements
//import Header from './components/Header/Header'

import './App.css'

function App() {
  return (
      <BrowserRouter>  
        <div>
          <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/bookClub" element={<BookClub />} />
          </Routes>
        </div>
      </BrowserRouter>
  )
}

export default App