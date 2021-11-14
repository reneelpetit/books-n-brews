import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Brews from './pages/Brews';
import Books from './pages/Books';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/brews" element={<Brews/>} />
            <Route path="/books" element={<Books/>}/>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;