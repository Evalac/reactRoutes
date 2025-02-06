import { useParams } from 'react-router-dom';

function Subbreeds() {
  const params = useParams();

  return <div>тут буде вся інформація про підпороду {params.dogId} </div>;
}

export default Subbreeds;
