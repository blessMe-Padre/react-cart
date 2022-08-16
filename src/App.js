import { Routes, Route } from 'react-router-dom';
import CartPage from './pages/CartPage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
    </>
  );
}

export default App;
