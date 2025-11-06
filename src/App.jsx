import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Vision from './components/Vision'

const App = () => {
  return (
    <div className="font-sans antialiased ">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Vision />
      <Contact />
      <Footer />
    </div>
  )
}

export default App