import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import styles from './ProductCard.module.css';

const ProductCard = ({ produto }) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.productCardImageContainer}>
        <LazyLoadImage
          src={produto.imagem}
          alt={produto.nome}
          className={styles.productCardImage}
          effect="blur"
          wrapperClassName={styles.productCardImageWrapper}
        />
        <div className={`${styles.productCardTag} ${styles['tag' + produto.tag]}`}>
          {produto.tag}
        </div>
      </div>
      <div className={styles.productCardContent}>
        <h3 className={styles.productCardTitle}>{produto.nome}</h3>
        <p className={styles.productCardPrice}>R$ {produto.preco.toFixed(2)}</p>
        <div className={styles.productCardRating}>
          {Array(Math.floor(produto.rating)).fill('★').join('')}
          <span className={styles.productCardRatingText}>{produto.rating}</span>
        </div>
        <button className={styles.productCardButton}>Adicionar</button>
      </div>
    </div>
  );
};

export default ProductCard;