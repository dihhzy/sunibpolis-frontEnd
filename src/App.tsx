import React from 'react';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Container } from 'react-bootstrap';
import { PrivacynPolicy } from './Pages/PrivacynPolicy';
import { Footer } from './Components/footer';
import { Routes, Route } from "react-router-dom";
import { Home } from './Pages/Home';
import { MyTicket } from './Pages/MyTicket';
import { News } from './Pages/News';
import { Register } from './Pages/Register';
import { Login } from './Pages/Login';
import { MoviePage } from './Pages/MoviePage';
import { TermsnCondition } from './Pages/TermsnCondition';
import { AboutUs } from './Pages/About';
import { Seat } from './Pages/Seat';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container className="mb-4 min-vh-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myTicket" element={<MyTicket />} />
          <Route path="/news" element={<News />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/moviePage" element={<MoviePage />} />
          <Route path="/moviePage/:movieId" element={<MoviePage />} />
          <Route path="/seat" element={<Seat />} />
          <Route path="/seat/:theaterId" element={<Seat />} />
          <Route path="/privacynpolicy" element={<PrivacynPolicy />} />
          <Route path="/termsncondition" element={<TermsnCondition />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;