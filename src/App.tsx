import React from 'react';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Container } from 'react-bootstrap';
import { Footer } from './Components/Footer';
import { Routes, Route } from "react-router-dom";
import { Home } from './Pages/Home';
import { MyTicket } from './Pages/MyTicket';
import { News } from './Pages/News';
import { Register } from './Pages/Register';
import { Login } from './Pages/Login';
import { MoviePage } from './Components/MoviePage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myTicket" element={<MyTicket />} />
          <Route path="/news" element={<News />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/moviePage" element={<MoviePage />} />
          <Route path="/moviePage/:movieId" element={<MoviePage />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;