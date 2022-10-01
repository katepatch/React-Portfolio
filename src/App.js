import Layout from './components/Layouts'
import './App.scss';
import React from 'react';
import { Router, Route } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio';



function App() {
  return (
    <div>
     <Router basename="React-Portfolio">
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
        </Route>
     </Router>
    </div>
  );
}

export default App;
