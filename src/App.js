import React from 'react';
import './App.css';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Navbar from './components/Navbar';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="container">
        <div class='split navbar'>
          <Navbar />
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
