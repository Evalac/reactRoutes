import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

function Dogs(params) {
  const [dogs, setDogs] = useState([
    'dog-1',
    'dog-2',
    'dog-3',
    'dog-4',
    'dog-5',
  ]);
  const [searchParams, setSearchParams] = useSearchParams();

  const dogId = searchParams.get('dogId') ?? '';
  console.log('dogID: ', dogId);

  const filteredDogs = dogs.filter(dog =>
    dog.toLowerCase().includes(dogId.toLowerCase())
  );

  const updateQueryString = e => {
    if (e.target.value === '') {
      return setSearchParams({});
    }

    setSearchParams({ dogId: e.target.value });
  };

  return (
    <div>
      <input type="text" value={dogId} onChange={updateQueryString} />
      <ul>
        {filteredDogs.map(dog => (
          <li key={dog}>
            <Link to={`${dog}`}>{dog}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dogs;
