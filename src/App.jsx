import { Profiler, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Profile } from './components/Profile/Profile'
import { Experiences } from './components/Experiences/Experiences'
import { Projects } from './components/Projects/Projects'
import { Skills } from './components/Skills/Skills'
import { Contact } from './components/Contact/Contact'
import { Gallery } from './components/Gallery/Gallery'
import Navbar from './components/Navbar/Nav'




function App() {
  
  return (
    <div className='App'>

      <Navbar />

      
    
    {/* <Navbar /> */}
    
    
    <section id='profile'>
    <Profile />
    </section>
    
    <section id='experiences'>
    <Experiences  />
    </section>

    <section id='projects'>
    <Projects />
    </section>
    <section id='learning'>
   <Gallery />
   </section>

    <section id='contact'>
    <Contact />
    </section>

    

    </div>
  )


}


export default App;
