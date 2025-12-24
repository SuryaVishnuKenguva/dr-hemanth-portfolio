import About from './components/About'
import ConsultationCalendar from './components/ConsultationCalendar'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import Expertise from './components/Expertise'
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
      <Expertise />
      <Experience />
      <Education />
      <ConsultationCalendar />
      <Vision />
      <Contact />
      <Footer />
    </div>
  )
}

export default App