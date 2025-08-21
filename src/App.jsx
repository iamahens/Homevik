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
import AboutUs from "./components/AboutUs"
import Services from "./components/Services"
// import TestimonialsCarousel from "./components/TestimonialsCarousel"
// import Categories from "./components/Categories"


function App() {
  
  return (
    <div className="bg-[#0D1117] text-gray-300" style={{fontFamily: "'Inter', sans-serif"}}>
      <Header/>
      <main>
        <Hero/>
        <AboutUs/>

        <Features/>
        <ProjectShowcase/>
        {/* <Categories/> */}
        <Services/>
        <WhyUs/>
       
        <HowItWorks/>
        
        <Testimonials/>
        {/* <TestimonialsCarousel/> */}
        <FAQ/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
