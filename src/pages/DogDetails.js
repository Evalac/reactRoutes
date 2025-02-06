import { useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

function DogDetails() {
  const params = useParams();
  console.log('DogDetails:', params);

  useEffect(() => {}, []); //тут робити http запит по параметру який приходить в params

  return (
    <>
      <h1>DogDetails: {params.dogId}</h1>
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
