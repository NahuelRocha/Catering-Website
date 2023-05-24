import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Error from './pages/Error404';
import Promos from './pages/Promos';
import Envios from './pages/Envios';
import Contacto from './pages/Contacto';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/promos' element={<Promos />} />
          <Route path='/envios' element={<Envios />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
