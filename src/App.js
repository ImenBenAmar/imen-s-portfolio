import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MyNavbar } from './component/Navbar';
import { Banner } from './component/Banner';
import { AboutMe } from './component/AboutMe';
import { Skills } from './component/Skills';
import { Experience } from './component/experience';
import { Projects } from './component/Projects';
import {Contact} from './component/Contact';

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Banner/>
      <AboutMe />
      <Projects />
      <section className="skills-experience-section">
        <h2 className="section-title">Skills & Experiences</h2>
        <div className="skills-experience-wrapper">
          <Skills />
          <Experience />
        </div>
      </section>
      <Contact />
    </div>
  );
}
export default App;