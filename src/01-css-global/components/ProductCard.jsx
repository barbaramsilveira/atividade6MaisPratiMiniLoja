import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ProductCard = ({ produto }) => {
  return (
    <div className="product-card">
      <div className="product-card-image-container">
        <LazyLoadImage
          src={produto.imagem}
          alt={produto.nome}
          effect="blur"
          className="product-card-image"
          wrapperClassName="product-card-image-wrapper"
        />

        <div className={`product-card-tag ${produto.tag.toLowerCase()}`}>
          {produto.tag}
        </div>
      </div>
      <div className="product-card-content">
        <h3 className="product-card-title">{produto.nome}</h3>
        <p className="product-card-price">R$ {produto.preco.toFixed(2)}</p>
        <div className="product-card-rating">
          {Array(Math.floor(produto.rating)).fill('★').join('')}
          <span className="product-card-rating-text">{produto.rating}</span>
        </div>
        <button className="product-card-button">Adicionar</button>
      </div>
    </div>
  );
};

export default ProductCard;
