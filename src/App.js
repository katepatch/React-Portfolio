import Layout from './components/Layouts'
import './App.scss';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

// function App() {
//   const [page] = useState(['home', 'about', 'contact', 'portfolio', 'resume'])
//   const [currentPage, setCurrentPage] = useState(page[0]);

//   function renderElement(currentPage) {
//     switch(currentPage) {
//       case 'home':
//         return <Home />;
//       case 'about':
//         return <About />;
//       case 'contact':
//         return <Contact />;
//       case 'portfolio':
//         return <Portfolio />;
//       case 'resume':
//         return <Resume />;
//       default: 
//         return <Home />;
//     }
//   }

//   return (
//     <div>
//       <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
//       <main>
//         {renderElement(currentPage)}
//       </main>
//     </div>
//   )

// }

function App() {
  return (
    <div>
     <Routes>
        <Route path="/React-Portfolio" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="resume" element={<Resume />} />
          <Route path="contact" element={<Contact />} />
        </Route>
     </Routes>
    </div>
  );
}

export default App;
