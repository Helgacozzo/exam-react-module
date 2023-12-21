import './App.css'
import { Route, Routes } from 'react-router-dom';
import AboutPage from './Components/AboutPage'
// const apiKey = import.meta.env.VITE_API_KEY;

function App() {

  return (
    <>
      <Routes>
        <Route index element={<AboutPage/>} /> 
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  )
}

export default App
