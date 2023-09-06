import React from 'react'
import Header from './components/Header'
import About from './components/About/About'
import {Routes, Route} from 'react-router-dom'
import Skills from './components/Skills/Skills'

export default function App() {
  return (
    <div className='w-screen flex flex-col items-center justify-center h-full font-mainFont'>
      <Header />
      <About />
      {/* <Skills /> */}
    </div>
  )
}
