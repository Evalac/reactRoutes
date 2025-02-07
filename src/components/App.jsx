import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Dogs from 'pages/Dogs';
import DogDetails from 'pages/DogDetails';
import Layout from './Layout';
import Gallary from './Gallary';
import Subbreeds from './Subbreeds';
import Products from './Products';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/dogs" element={<Dogs />} />
          <Route path="/dogs/:dogId" element={<DogDetails />}>
            <Route path="subbreeds" element={<Subbreeds />} />
            <Route path="gallary" element={<Gallary />} />
          </Route>
        </Route>
        <Route
          path="*"
          element={<p>Такої сторінки не знайдено, перейдіть назад</p>}
        />
      </Routes>
    </div>
  );
};
