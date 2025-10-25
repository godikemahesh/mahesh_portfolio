import "./App.css"
import Nav from "./components/nav/Nav";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import StartupVision from "./components/startup/StartupVision";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <div className="app">
            <Nav/>
            
            <Intro/>
            
            <div id="about" className="section">
                <About/>
            </div>
            
            <div id="skills" className="section">
                <Skills/>
            </div>
            
            <div id="projects" className="section">
                <Projects/>
            </div>
            
            <div id="startup" className="section">
                <StartupVision/>
            </div>
            
            <div id="contact">
                <Contact/>
            </div>
            
            <Footer/>
        </div>
    )
}
export default App;