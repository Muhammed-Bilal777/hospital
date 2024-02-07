 
import About from '../components/About'
import Blog from '../components/Blog'
import Doctors from '../components/Doctors'
import Footer from '../components/Footer'
 
import Home from '../components/Home'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import './App.css'

function App() {
  

  return (
    <>
        <Navbar/> 
        <main>
          <div id="home" className="z-20" >
            <Home/> 
          </div>
          <div  id="about" className="z-20">
            <About/>
          </div>
          <div  id="services" className="z-20">
            <Services/>
          </div>
          <div id="doctors" className="z-20">
            <Doctors />
          </div>
          <div  id='blog' className="z-20">
            <Blog />
          </div>
          <div id='footer'>
            <Footer />
          </div>
        </main>
    </>
  )
}

export default App
