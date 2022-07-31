import { Profiler, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { Profile } from './components/Profile/Profile'
import { Experiences } from './components/Experiences/Experiences'
import { Projects } from './components/Projects/Projects'
import { Skills } from './components/Skills/Skills'

function App() {
  
  return (
    <div className="App">
      <Navbar />
      {/* Sidebar */}
      <Profile />
      
      <Experiences />
      <Projects />
      {/* Contact */}
      {/* Resume */}
      {/*  */}
    </div>
  )
}

export default App
