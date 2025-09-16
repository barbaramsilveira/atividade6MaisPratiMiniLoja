import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import ProductCard from "./components/ProductCard";
import { itens } from "../products";
import "./tailwind.css";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <div className="pt-28 px-6 md:px-12 lg:px-24">
        <Title />
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {itens.map((produto) => (
            <ProductCard key={produto.id} produto={produto} loading={loading} />
          ))}
        </div>
      </div>
    </div>
  );
}