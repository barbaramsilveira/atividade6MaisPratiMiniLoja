import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClasses = ({ isActive }) =>
    `px-6 py-3 rounded-lg transition-all duration-300 font-medium ${
      isActive
        ? "bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white"
        : "text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-lg border-b border-gray-200 dark:border-gray-700">
      <div className="flex justify-center md:justify-start gap-4 h-20 items-center px-4 md:px-8 overflow-x-auto whitespace-nowrap">
        <NavLink to="/global" className={linkClasses}>
          CSS Global
        </NavLink>
        <NavLink to="/modules" className={linkClasses}>
          CSS Modules
        </NavLink>
        <NavLink to="/tailwind" className={linkClasses}>
          Tailwind
        </NavLink>
        <NavLink to="/styled-components" className={linkClasses}>
          Styled Components
        </NavLink>
      </div>
    </nav>
  );
}
