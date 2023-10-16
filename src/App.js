
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About2/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Testimonial from './components/Testimonial/Testimonial';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Testimonial/>
        <Contact/>
        <Footer/>
      </main>
    </>
  );
}

export default App;
