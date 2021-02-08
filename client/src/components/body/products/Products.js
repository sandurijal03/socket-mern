import React, { useContext } from 'react';
import { DataContext } from '../../../GlobalState';
import ProductCard from '../../utils/productCard/ProductCard';
import './Products.css';

const Products = () => {
  const state = useContext(DataContext);
  const [products] = state.products;

  console.log(products);

  return (
    <>
      <h2 className='app_title'>Realtime chat website with mern.</h2>
      <div className='products_page'>
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Products;
