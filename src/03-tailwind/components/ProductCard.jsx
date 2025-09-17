import React from "react";
import Skeleton from './Skeleton';

export default function ProductCard({ produto, loading }) {
  if (loading) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5">
        <Skeleton className="h-52 mb-4 rounded" />
        <Skeleton className="h-6 mb-2 rounded" />
        <Skeleton className="h-4 mb-2 rounded" />
        <Skeleton className="h-6 w-20 rounded" />
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col">
      <div className="flex-1">
        <div className="flex-shrink-0 h-64 w-full overflow-hidden">
          <img
            src={produto.imagem}
            alt={produto.nome}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="p-5 flex flex-col">
          <h2 className="text-lg md:text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            {produto.nome}
          </h2>
        <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">
          {produto.tag}
        </p>
        <p className="text-lg md:text-xl font-bold text-blue-600 dark:text-blue-400">
          ${produto.preco.toFixed(2)}
        </p>
      </div>
    </div>
  );
}