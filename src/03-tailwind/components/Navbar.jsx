// src/03-tailwind/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex justify-center gap-4 bg-white dark:bg-gray-800 shadow-md p-4">
      <Link
        to="/global"
        className="px-3 py-2 rounded-md text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      >
        CSS Global
      </Link>
      <Link
        to="/modules"
        className="px-3 py-2 rounded-md text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      >
        CSS Modules
      </Link>
      <Link
        to="/tailwind"
        className="px-3 py-2 rounded-md text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      >
        Tailwind
      </Link>
      <Link
        to="/styled-components"
        className="px-3 py-2 rounded-md text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      >
        Styled Components
      </Link>
    </nav>
  );
}
