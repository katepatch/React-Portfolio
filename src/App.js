import Layout from './components/layouts'
import './App.scss';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
     <Routes>
        <Route path="/" element={<Layout />} />
     </Routes>
    </div>
  );
}

export default App;
