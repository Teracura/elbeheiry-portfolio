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
                        Via this project, I gained experience in game design, state management, saveState with a local database with <strong>SQLite</strong>, <strong>Entity Framework core</strong>, <strong>Factory pattern</strong> and <strong>Singleton pattern</strong>, <strong>Asynchronous programming</strong>, and more. <br /><br />
                        The game offers an engaging experience with character progression, inventory and shop management, and diverse enemy encounters. <br /><br />
                        It was a great opportunity to enhance my skills in C# and .NET MAUI while creating an enjoyable gaming experience. <br /><br />
                        It's also my first (real) published project on GitHub! Check it out below:
                    </p>

                    <Link
                        href="https://github.com/teracura/RPGTextAdventureWin"
                        target="_blank"
                        rel="noopener noreferrer"
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
                        rel="noopener noreferrer"
                        className="w-full"
                    >
                        <button className="w-full bg-blue-600 dark:bg-purple-800 hover:bg-blue-700 dark:hover:bg-purple-900 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-300">
                            View on GitHub
                        </button>
                    </Link>
                </div>

                {/*NizamDesk*/}
                <div className="bg-gray-300 dark:bg-gray-800 rounded-xl shadow-md flex flex-col items-center justify-start text-xl font-semibold p-6 text-center">
                    <h3 className="text-2xl mb-2 text-blue-600 dark:text-purple-800">NizamDesk</h3>
                    <p className="text-base text-start font-normal text-gray-700 dark:text-gray-200 mb-4 leading-relaxed">
                        A productivity web application built using <strong>ASP.NET</strong> (previously used <strong>MVC</strong> before I switched to <strong>Blazor</strong>), designed to help users manage their tasks and projects efficiently. <br /><br />
                        In this project, I implemented a <strong>login and logout system</strong> using SQLServer as my database. including handling logins from external providers via <strong>OAuth</strong><br /><br />
                        I also learned many aspects of security such as <strong>password hashing</strong> and <strong>input validation</strong> to ensure user data protection. And learned the importance of JWT (JSON Web Tokens) for secure user authentication. Though it is still a work in progress, I am proud of the foundation I have built. <br /><br />
                        This project allowed me to deepen my understanding of full-stack development, including RESTful APIs, database management, and user authentication. <br /><br />
                        This project is currently on hold while I explore other areas of software development, but I am proud of the solid foundation I have built and plan to resume it in the future.
                    </p>

                    <Link
                        href="https://github.com/teracura/nizamdesk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                    >
                        <button className="w-full bg-blue-600 dark:bg-purple-800 hover:bg-blue-700 dark:hover:bg-purple-900 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-300">
                            View on GitHub
                        </button>
                    </Link>
                </div>

                {/* Teracura.AbstractSort */}
                <div className="bg-gray-300 dark:bg-gray-800 rounded-xl shadow-md flex flex-col items-center justify-start text-xl font-semibold p-6 text-center">
                    <h3 className="text-2xl mb-2 text-blue-600 dark:text-purple-800">Teracura.AbstractSort</h3>
                    <p className="text-base text-start font-normal text-gray-700 dark:text-gray-200 mb-4 leading-relaxed">
                        <strong>Teracura.AbstractSort</strong> – A C# class library offering abstract and highly customizable sorting algorithms using <strong>LINQ</strong>.<br /><br />
                        Supports sorting mixed-type collections, version strings, and multi-level sorting via <strong>reflection</strong> or <strong>lambda expressions</strong>.<br /><br />
                        Built with extensibility in mind, includes <strong>unit tests</strong> (<strong>xUnit</strong>) and a <strong>builder-pattern API</strong>.
                        This project helped me learn <strong>TDD</strong>, proper <strong>documentation</strong>, and advanced <strong>C# concepts</strong> like generics and extending <strong>IEnumerable</strong>.<br /><br />
                        learn more about <Link className="text-blue-600 dark:text-purple-400" href="projects/AbstractSort">AbstractSort</Link>? because there is much I want to say <br /><br />
                        Or check it out below:
                    </p>

                    <Link
                        href="https://github.com/Teracura/Teracura.AbstractSort"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                    >
                        <button className="w-full bg-blue-600 dark:bg-purple-800 hover:bg-blue-700 dark:hover:bg-purple-900 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-300">
                            View on GitHub
                        </button>
                    </Link>
                </div>

                {/* CS304Lab */}
                <div className="bg-gray-300 dark:bg-gray-800 rounded-xl shadow-md flex flex-col items-center justify-start text-xl font-semibold p-6 text-center">
                    <h3 className="text-2xl mb-2 text-blue-600 dark:text-purple-800">CS304Lab</h3>
                    <p className="text-base text-start font-normal text-gray-700 dark:text-gray-200 mb-4 leading-relaxed">
                        A collection of lab exercises and assignments (and personal learning attempts) for the <strong>CS304 - Computer graphics</strong> course, implemented in <strong>java OpenGL Library</strong>.<br /><br />
                        This repository includes implementations of various java tools such as <strong>Java.Swing</strong> and JOGL, it focuses on 2D graphics rendering, transformations, and animations.<br /><br />
                        Working on these labs helped me solidify my understanding of how computers graphics are drawn generally, especially in game engines, and through I learned caching static graphical scene caching and various method to optimize the workload on the GPU.<br /><br />
                        Check it out below:
                    </p>
                    <Link
                        href="https://github.com/Teracura/CS304Lab"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                    >
                        <button className="w-full bg-blue-600 dark:bg-purple-800 hover:bg-blue-700 dark:hover:bg-purple-900 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-300">
                            View on GitHub
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}