import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import About from './Components/About'
import Skills from './Components/Skills'
import Footer from './Components/Footer'
import Projects from './Components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Projects/>

      <Footer />
    </div>
  
  )
}

export default App
