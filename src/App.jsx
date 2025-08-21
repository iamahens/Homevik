import Contact from "./components/Contact"
import Features from "./components/Features"
import Header from "./components/Header"
import Hero from "./components/Hero"
import HowItWorks from "./components/HowItWorks"
import ProjectShowcase from "./components/ProjectShowcase"
import Testimonials from "./components/Testimonials"
import WhyUs from "./components/WhyUs"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"
import ControlOptions from "./components/ControlOptions"
import InteractiveControl from "./components/InteractiveControl"
import AboutUs from "./components/AboutUs"
import Services from "./components/Services"


function App() {
  
  return (
    <div className="bg-[#0D1117] text-gray-300" style={{fontFamily: "'Inter', sans-serif"}}>
      <Header/>
      <main>
        <Hero/>
        <AboutUs/>
        <Features/>
        <ProjectShowcase/>
        <Services/>
        <WhyUs/>
        <ControlOptions/>
        <HowItWorks/>
        <InteractiveControl/>
        <Testimonials/>
        <FAQ/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
