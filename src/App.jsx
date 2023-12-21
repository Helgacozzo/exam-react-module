import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './Components/AboutPage';
import HomePage from './Components/HomePage';
import SearchPage from './Components/SearchPage';
import Navbar from './Components/NavBar';
const apiKey = import.meta.env.VITE_API_KEY;

function App() {

  return (

    <>
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="search" element={<SearchPage apiKey={apiKey} />} />
      </Routes>
    </>

  );
}

export default App;
