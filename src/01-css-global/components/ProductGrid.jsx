import React from 'react';
import ProductCard from './ProductCard';
import { itens } from '../../products';

const ProductGrid = () => {
  return (
    <div className="product-grid">
      {itens.map(produto => (
        <ProductCard key={produto.id} produto={produto} />
      ))}
    </div>
  );
};

export default ProductGrid;