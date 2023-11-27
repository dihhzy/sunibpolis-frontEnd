import React from 'react';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Container } from 'react-bootstrap';
import { Routes, Route } from "react-router-dom"
import { Home } from './Pages/Home';
import { MyTicket } from './Pages/MyTicket';
import { Movies } from './Pages/Movies';
import { News } from './Pages/News';
import { Register } from './Pages/Register';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/myTicket" element={<MyTicket />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;