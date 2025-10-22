"use client";

import { useState } from "react";
import ThemeToggle from "../app/theme-toggle";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 transition-colors duration-500 ease-in-out">
      <div className="max-w-9xl mx-auto flex items-center justify-between h-20 px-4 sm:px-6">
        <h1 className="text-4xl font-bold text-blue-600 dark:text-purple-800">A website</h1>

        {/* Desktop Links */}
        <nav className="hidden sm:flex space-x-2 items-center text-gray-600 dark:text-gray-300 font-medium">
          <a href="#introduction" className="px-4 py-2 hover:bg-blue-100 dark:hover:bg-gray-700 rounded transition-all">Home</a>
          <a href="#skills" className="px-4 py-2 hover:bg-blue-100 dark:hover:bg-gray-700 rounded transition-all">Skills</a>
          <a href="#projects" className="px-4 py-2 hover:bg-blue-100 dark:hover:bg-gray-700 rounded transition-all">Projects</a>
          <a href="#contact" className="px-4 py-2 hover:bg-blue-100 dark:hover:bg-gray-700 rounded transition-all">Contact</a>
          <ThemeToggle />
        </nav>

        {/* Mobile Hamburger */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {/* Hamburger Icon */}
            <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (upon opening hamburger)*/}
      <div className={`sm:hidden transition-all duration-300 ${isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"}`}>
        <div className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 flex flex-col">
          <a href="#introduction" className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700">Home</a>
          <a href="#skills" className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700">Skills</a>
          <a href="#projects" className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700">Projects</a>
          <a href="#contact" className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700">Contact</a>
          <div className="px-4 py-2"><ThemeToggle /></div>
        </div>
      </div>
    </header>
  );
}
