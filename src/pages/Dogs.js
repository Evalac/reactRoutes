import { Link } from 'react-router-dom';

function Dogs(params) {
  return (
    <div>
      <ul>
        {['dog-1', 'dog-2', 'dog-3', 'dog-4', 'dog-5'].map(dog => (
          <li key={dog}>
            <Link to={`${dog}`}>{dog}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dogs;
