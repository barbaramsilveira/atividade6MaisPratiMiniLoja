import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Title from './components/Title';
import Footer from "./components/Footer";
import ProductGrid from "./components/ProductGrid";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <Title />
        <ProductGrid />
      </div>
      <Footer />
    </div>
  );
}

export default App;
