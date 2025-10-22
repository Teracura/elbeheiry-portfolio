"use client";

import ThemeToggle from "../app/theme-toggle";

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 transition-colors duration-500 ease-in-out">
      <div className="max-w-9xl mx-auto flex items-stretch justify-between p-0 h-20">
        <h1 className="flex items-center px-6 text-4xl font-bold text-blue-600 dark:text-blue-400">
          A website
        </h1>
        <nav className="flex text-gray-600 dark:text-gray-300 font-medium items-stretch">
          <button className="flex items-center h-full px-6 hover:bg-blue-100 dark:hover:bg-gray-700 transition-all duration-300">Home</button>
          <button className="flex items-center h-full px-6 hover:bg-blue-100 dark:hover:bg-gray-700 transition-all duration-300">About</button>
          <button className="flex items-center h-full px-6 hover:bg-blue-100 dark:hover:bg-gray-700 transition-all duration-300">Contact</button>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}