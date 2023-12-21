import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom';
import AboutPage from './Components/AboutPage'
import HomePage from './Components/HomePage';

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
        </menu>
      </nav>

      <Routes>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>

    </>

  )

}

export default App
