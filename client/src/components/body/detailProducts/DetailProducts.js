import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from '../../../GlobalState';
import DetailProductCard from '../../utils/detailProductCard/DetailProductCard';

const DetailProducts = () => {
  const { id } = useParams();

  const state = useContext(DataContext);

  const [products] = state.products;

  const [detailProduct, setDetailProduct] = useState([]);

  useEffect(() => {
    const newArr = products.filter((product) => product._id === id);
    setDetailProduct(newArr);
  }, [id, products]);

  return (
    <div className='detail_product_page'>
      {detailProduct.map((product) => (
        <DetailProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default DetailProducts;
