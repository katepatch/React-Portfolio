import Layout from './components/Layouts'
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'

function App() {
  return (
    <div>
     <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
     </Routes>
    </div>
  );
}

export default App;
