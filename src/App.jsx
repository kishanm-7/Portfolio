import SmoothScroll from './components/SmoothScroll'
import CustomCursor from './components/CustomCursor'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <main className="w-full min-h-screen bg-dark text-light overflow-hidden">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </SmoothScroll>
  )
}

export default App
