import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Content from './components/content';
import Dashboard from './pages/dashboard';
import About from './pages/about';
import Contact from './pages/contact';
import Praktik2 from './pages/praktik2';
import PraktikBootstrap from './pages/praktikbootstrap';
import PraktikTailwind from './pages/praktiktailwind';
import PraktikAPI from './pages/praktikAPI';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/content" element={<Content />} />
          <Route path="/praktik2" element={<Praktik2 />} />
          <Route path="/praktikbootstrap" element={<PraktikBootstrap />} />
          <Route path="/praktiktailwind" element={<PraktikTailwind />} />
          <Route path="/praktikAPI" element={<PraktikAPI />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
