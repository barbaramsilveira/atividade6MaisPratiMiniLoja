// src/02-css-modules/components/Title.jsx
import React from 'react';
import styles from './Title.module.css';

const Title = () => {
  return (
    <header className={styles.titlePage}>
      <h1>Amelie & Charlotte's Shop</h1>
    </header>
  );
};

export default Title;