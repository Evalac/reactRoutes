import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState('');
  const name = searchParams.get('name');
  console.log(searchParams);

  return (
    <div>
      <h1>Products</h1>
      <input
        type="text"
        value={inputValue}
        onChange={e => {
          setSearchParams({ name: e.target.value });
          setInputValue(e.target.value);
        }}
      />
    </div>
  );
};

export default Products;
