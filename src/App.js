import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import CartPage from './pages/CartPage';
import MainPage from './pages/MainPage';
import { store } from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
    </Provider>
  );
}

export default App;
