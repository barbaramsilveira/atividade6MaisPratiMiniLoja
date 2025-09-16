import { useEffect, useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("dark") === "true") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleDark = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("dark", "false");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("dark", "true");
    }
    setDark(!dark);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow p-4 flex justify-between items-center z-10">
      <div className="font-bold text-lg">Mini Loja</div>
      <button
        onClick={toggleDark}
        className="px-3 py-1 rounded border border-gray-400 dark:border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        {dark ? "☀️ Claro" : "🌙 Escuro"}
      </button>
    </nav>
  )
}
