import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Awards from './pages/Awards';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Interests from './pages/Contact';
import Skills from './pages/Skills';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="container">
        <div class='split navbar'>
          <Navbar />
        </div>
        {/* <div class='split content'>
          <main>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/About' element={<About />} />
              <Route path='/Awards' element={<Awards />} />
              <Route path='/Education' element={<Education />} />
              <Route path='/Experience' element={<Experience />} />
              <Route path='/Interests' element={<Interests />} />
              <Route path='/Skills' element={<Skills />} />
            </Routes>
          </main>
        </div> */}
      </div>
    </ChakraProvider>
  );
}

export default App;
