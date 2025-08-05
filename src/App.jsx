import { useState } from 'react'
import './App.css'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Home from './component/Home'
import About from './component/About'
import Pages from './component/Pages'
import Mailus from './component/Mailus'
import Gallery from './component/Gallery'
import Header from './component/Header'



function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/header' element={<Header/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/pages' element={<Pages/>}/>
          <Route path='/mailus' element={<Mailus/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
