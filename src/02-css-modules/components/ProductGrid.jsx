import React from 'react';
import ProductCard from './ProductCard';
import { itens } from "../../products.js";
import styles from './ProductGrid.module.css';

const ProductGrid = () => {
  return (
    <div className={styles.productGrid}>
      {itens.map((produto) => (
        <ProductCard key={produto.id} produto={produto} />
      ))}
    </div>
  );
};

export default ProductGrid;