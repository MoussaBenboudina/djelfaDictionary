// src/components/Header.jsx
import { useState, useEffect } from "react";
import { IoSunny } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
// import { Link } from "react-router-dom";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="z-10 fixed flex justify-between px-4 lg:px-10 xl:px-20 items-center w-full  bg-white/50 backdrop-blur-md shadow-lg p-4 transition-colors duration-500 ease-in-out">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-lg hover:border-pink-600 border-2  bg-gray-500 text-xl lg:text-2xl xl:text-2xl transition-colors duration-100 ease text-white font-bold dark:text-dark-text "
      >
        {darkMode ? <IoSunny /> : <IoMoon />}
      </button>
      <div className="logo  text-pink-500 font-bold dark:text-dark-text transition-colors duration-500 ease-in-out">
        djelfaWords
      </div>
    </div>
  );
};

export default Header;
