import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import MotosPage from './pages/MotosPage';
import MotoDetailPage from './pages/MotoDetailPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/motos" element={<MotosPage />} /> {/* <-- Ruta del catálogo */}
        <Route path="/motos/:id" element={<MotoDetailPage />} /> {/* <-- Ruta para la ficha técnica */}
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;