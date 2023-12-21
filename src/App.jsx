import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import AboutPage from './Components/AboutPage';
import HomePage from './Components/HomePage';
import SearchPage from './Components/SearchPage';
const apiKey = import.meta.env.VITE_API_KEY;

function App() {

  return (
    <>
      <nav>
        <menu>
          <li>
            <NavLink className="link" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className="link" to="/about">About</NavLink>
          </li>
          <li>
            <NavLink className="link" to="/search">Search</NavLink>
          </li>
        </menu>
      </nav>

      <Routes>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="search" element={<SearchPage apiKey={apiKey} />} />
      </Routes>
    </>
  );
}

export default App;
