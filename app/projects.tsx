"use client";

import Link from "next/link";

export default function Projects() {
    return (
        <section

            id="projects"
            className="flex flex-col items-center justify-center mt-20 text-center px-6"
        >
            <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-purple-800">
                My Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-7 w-full max-w-8xl mb-10">
                {/* RPGTextAdventureWin */}
                <div className="bg-gray-300 dark:bg-gray-800 rounded-xl shadow-md flex flex-col items-center justify-start text-xl font-semibold p-6 text-center">
                    <h3 className="text-2xl mb-2 text-blue-600 dark:text-purple-800">RPGTextAdventureWin</h3>

                    <p className="text-start text-base font-normal text-gray-700 dark:text-gray-200 mb-4 leading-relaxed">
                        A text-based RPG game built with <strong>C#</strong> and <strong>.NET MAUI</strong>, featuring turn-based combat mechanics.<br /><br />
                        Via this project, I gained experience in game design, state management, saveState with a local database with <strong>SQLite</strong>, <strong>Entity Framework core</strong>, Factory pattern and Singleton pattern, and more. <br /><br />
                        The game offers an engaging experience with character progression, inventory and shop management, and diverse enemy encounters. <br /><br />
                        It was a great opportunity to enhance my skills in C# and .NET MAUI while creating an enjoyable gaming experience. <br /><br />
                        It's also my first (real) published project on GitHub! Check it out below:
                    </p>

                    <Link
                        href="https://github.com/teracura/RPGTextAdventureWin"
                        target="_blank"
                        rel="za3bola"
                        className="w-full"
                    >
                        <button className="w-full bg-blue-600 dark:bg-purple-800 hover:bg-blue-700 dark:hover:bg-purple-900 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-300">
                            View on GitHub
                        </button>
                    </Link>
                </div>

                {/*elbeheiry-portfolio*/}
                <div className="bg-gray-300 dark:bg-gray-800 rounded-xl shadow-md flex flex-col items-center justify-start text-xl font-semibold p-6 text-center">
                    <h3 className="text-2xl mb-2 text-blue-600 dark:text-purple-800">Elbeheiry Portfolio</h3>
                    <p className="text-base text-start font-normal text-gray-700 dark:text-gray-200 mb-4 leading-relaxed">
                        A personal portfolio website built using <strong>Next.js</strong> and <strong>Tailwind CSS</strong>, showcasing my technical skills, featured projects, and personal achievements. <br /><br />
                        It's basically my resume but better... self explanatory you are literally seeing this website as of now <br /><br />
                        It allowed me to strengthen my understanding of React components, client/server rendering, and UI/UX design principles.
                         and apply my HTML, CSS and JS knowledge in a project that's decent in size <br /><br />
                        The project is still ongoing as I plan to add more features and projects in the future. check it out below:
                    </p>

                    <Link
                        href="https://github.com/teracura/elbeheiry-portfolio"
                        target="_blank"
                        rel="hon hon"
                        className="w-full"
                    >
                        <button className="w-full bg-blue-600 dark:bg-purple-800 hover:bg-blue-700 dark:hover:bg-purple-900 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-300">
                            View on GitHub
                        </button>
                    </Link>
                </div>

            </div>
        </section >
    );
}