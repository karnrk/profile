import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import About from './assets/components/pages/About';
import Education from './assets/components/pages/Education';
import Layout from './assets/components/Layout';
import Experience from './assets/components/pages/Experience';
import Portfolio from './assets/components/pages/portfolio';
import Contact from './assets/components/pages/Contact';

function App() {

  return (
    <div id="react-portfolio" className="layout">
      <div className="layout-content py-4 px-4">
        <div className="layout-navigation-wrapper flex">
          <HashRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<About />} />
                <Route path="education" element={<Education />} />
                <Route path="experience" element={<Experience />} />
                <Route path="portfolio" element={<Portfolio />} />
                <Route path="contact" element={<Contact />} />
              </Route>
            </Routes>
          </HashRouter>
        </div>
      </div>
    </div>
  )
}

export default App
