"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark" || (!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      id="theme-toggle"
      onClick={toggleTheme}
      className="flex items-center justify-center h-full px-6 hover:bg-blue-100 dark:hover:bg-gray-700 transition-all duration-300"
    >
      <Image
        id="theme-icon"
        src={isDark ? "/theme-icon-dark.svg" : "/theme-icon.svg"}
        alt="Toggle Theme"
        width={24}
        height={24}
      />
    </button>
  );
}
