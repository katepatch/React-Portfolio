import Layout from './components/Layouts'
import './App.scss';
import React from 'react';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Sidebar />
     <Routes>
        <Route exact path="/" element={<Layout />}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="about" element={<About />} />
        <Route exact path="portfolio" element={<Portfolio />} />
        <Route exact path="resume" element={<Resume />} />
        <Route exact path="contact" element={<Contact />} />
        </Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
