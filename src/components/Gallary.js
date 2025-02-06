import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Gallary() {
  const params = useParams();
  console.log('Gallary:', params); // по цьмо параметру ми можемо робити fetch()
  useEffect(() => {}, []);

  return (
    <div>
      Тут буде рендеритись галерея по запиту на таку породу {params.dogId}{' '}
    </div>
  );
}

export default Gallary;
