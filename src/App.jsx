import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './Components/AboutPage';
import HomePage from './Components/HomePage';
import SearchPage from './Components/SearchPage';
import Navbar from './Components/Navbar';
import PersonPage from './Components/PersonPage';
const apiKey = import.meta.env.VITE_API_KEY;

function App() {

  return (

    <>
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="search" element={<SearchPage apiKey={apiKey} />} />
        <Route path="person/:id" element={<PersonPage apiKey={apiKey} />} />
      </Routes>
    </>
    
  );
}

export default App;
