import React from 'react';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Container } from 'react-bootstrap';
import { Footer } from './Components/Footer';
<<<<<<< HEAD
=======
import { PrivacynPolicy } from './Pages/PrivacynPolicy';
>>>>>>> 8b9a54755fb3f97a19b5180a49754a3364e4aca5
import { Routes, Route } from "react-router-dom";
import { Home } from './Pages/Home';
import { MyTicket } from './Pages/MyTicket';
import { News } from './Pages/News';
import { Register } from './Pages/Register';
import { Login } from './Pages/Login';
import { MoviePage } from './Components/MoviePage';
<<<<<<< HEAD
=======
import { TermsnCondition } from './Pages/TermsnCondition';
import { AboutUs } from './Pages/About';
>>>>>>> 8b9a54755fb3f97a19b5180a49754a3364e4aca5

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
<<<<<<< HEAD
          <Route path="/moviePage" element={<MoviePage />} />
          <Route path="/moviePage/:movieId" element={<MoviePage />} />
=======
          <Route path="/about" element={<AboutUs />} />
          <Route path="/moviePage" element={<MoviePage />} />
          <Route path="/moviePage/:movieId" element={<MoviePage />} />
          <Route path="/privacynpolicy" element={<PrivacynPolicy />} />
          <Route path="/termsncondition" element={<TermsnCondition />} />
>>>>>>> 8b9a54755fb3f97a19b5180a49754a3364e4aca5
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;