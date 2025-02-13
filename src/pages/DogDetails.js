import { useEffect } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';

function DogDetails() {
  const params = useParams();
  console.log('DogDetails:', params);

  const location = useLocation();
  console.log(`location DogDetails`, location);

  useEffect(() => {}, []); //тут робити http запит по параметру який приходить в params

  return (
    <>
      <h1>DogDetails: {params.dogId}</h1>
      <Link to={location.state?.from ?? '/dogs'}>Назад</Link>
      <ul>
        <li>
          <Link to={'subbreeds'}>Подпороди</Link>
        </li>
        <li>
          <Link to={'gallary'}>Галерея</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}

export default DogDetails;
