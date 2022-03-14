import React from 'react'
import Nav from './components/nav/Nav.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import Portfolio from './components/portfolio/Portfolio.jsx'
import Header from './components/header/Header.jsx'
import Services from './components/services/Services.jsx'
import Experience from './components/experience/Experience.jsx'
import Testimonials from './components/testimonials/Testimonials.jsx'
import Footer from './components/footer/Footer.jsx'

function App() {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App