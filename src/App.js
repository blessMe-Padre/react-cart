import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import CartPage from './pages/CartPage';
import MainPage from './pages/MainPage';
import { store } from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/react-cart' element={<MainPage />} />
        <Route path='/react-cart/cart' element={<CartPage />} />
      </Routes>
    </Provider>
  );
}

export default App;
