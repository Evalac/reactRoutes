import { useSearchParams } from 'react-router-dom';

export const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('name');
  console.log(searchParams);

  return (
    <div>
      <h1>Products</h1>
      <input
        type="text"
        value={name}
        onChange={e => setSearchParams({ name: e.target.value })}
      />
    </div>
  );
};

export default Products;
