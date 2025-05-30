import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MyNavbar } from './component/Navbar';
import { Banner } from './component/Banner';
import { AboutMe } from './component/AboutMe';
import { Skills } from './component/Skills';
import { Projects } from './component/Projects';
import {Contact} from './component/Contact';
function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Banner/>
      <AboutMe />
      <Skills/>
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
