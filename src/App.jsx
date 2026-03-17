import NavBar from './components/NavBar'
import Home from './components/sections/Home'
import About from './components/sections/About'
import NightSky from './components/NightSky'
// import Projects from './components/sections/Projects'
// import Contact from './components/sections/Contact'

function App() {
  return (
    <div className="min-h-screen"> 
      <NightSky />
      <NavBar />
      <main>
        <Home />
        <About />
      </main>
      
    </div>
  )
}

export default App