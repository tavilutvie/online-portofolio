import './App.css';
import {Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Awards from './pages/Awards';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Interests from './pages/Interests';
import Skills from './pages/Skills';

function App() {
  return (
    <div className="container">
      <div class='split navbar'>
        <Navbar />
      </div>
      <div class='split content'>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path='/Awards' element={<Awards />} />
            <Route path='/Education' element={<Education />} />
            <Route path='/Experience' element={<Experience />} />
            <Route path='/Interests' element={<Interests />} />
            <Route path='/Skills' element={<Skills />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
