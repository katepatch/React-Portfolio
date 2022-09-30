import Layout from './components/Layouts'
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio';



function App() {
  return (
    <div>
     <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact index element={<Home />} />
          <Route exact path="about" element={<About />} />
          <Route exact path="portfolio" element={<Portfolio />} />
          <Route exact path="contact" element={<Contact />} />
        </Route>
     </Routes>
    </div>
  );
}

export default App;
