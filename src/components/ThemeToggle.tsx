"use client";
import {useState} from "react";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <button className="bg-gray-200 p-2 dark:bg-gray-800" type="button" onClick={toggleTheme}>
      Cambiar a {darkMode ? "Tema Claro" : "Tema Oscuro"}
    </button>
  );
}

export default ThemeToggle;
