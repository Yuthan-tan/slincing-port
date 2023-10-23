
import './App.css'
import Skills from './components/Skills'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About';
import Portfolio from './components/portfolio';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {


  return (
  <>
    <Navbar/>
    <Home/>
    <Skills/>
    <About/>
    <Portfolio/>
    <Testimonial/>
    <Contact/>
    <Footer/>
  </>
  )
}

export default App
