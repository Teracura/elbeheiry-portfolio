"use client";

export default function Skills() {
    return (
        <section
            id="skills"
            className="flex flex-col items-center justify-center mt-20 text-center px-6"
        >
            <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-purple-800">
                My Skills
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 w-full max-w-8xl mb-10">
                {/* .NET Card */}
                <div className="bg-gray-300 dark:bg-gray-800 rounded-xl shadow-md flex flex-col items-center justify-start text-xl font-semibold p-6 text-center">
                    <h3 className="text-2xl mb-2 text-blue-600 dark:text-purple-800">.NET</h3>
                    <p className="text-base font-normal text-gray-700 dark:text-gray-200 mb-3">
                        Technologies and frameworks I frequently use:
                    </p>
                    <ul className="list-disc list-inside text-base font-normal text-gray-700 dark:text-gray-200 text-left space-y-1">
                        <li>Proficient in C# and .NET framework for building robust web applications using ASP.NET Core (MVC and Blazor).</li>
                        <li>Experienced with Entity Framework Core and LINQ for efficient data access and management.</li>
                        <li>Familiar with .NET MAUI for developing cross-platform applications.</li>
                        <li>Skilled in asynchronous programming and task-based concurrency.</li>
                        <li>Understanding of dependency injection and inversion of control principles.</li>
                    </ul>
                </div>

                {/* Design Patterns Card */}
                <div className="bg-gray-300 dark:bg-gray-800 rounded-xl shadow-md flex flex-col items-center justify-start text-xl font-semibold p-6 text-center">
                    <h3 className="text-2xl mb-2 text-blue-600 dark:text-purple-800">Design Patterns</h3>
                    <p className="text-base font-normal text-gray-700 dark:text-gray-200 mb-3">
                        Experience with the following design patterns:
                    </p>
                    <ul className="list-disc list-inside text-base font-normal text-gray-700 dark:text-gray-200 text-left space-y-1">
                        <li>Singleton</li>
                        <li>Factory Method</li>
                        <li>Builder Pattern</li>
                        <li>Model-View-ViewModel (MVVM)</li>
                        <li>Model-View-Controller (MVC)</li>
                    </ul>
                </div>

                {/* Other Technical Skills Card */}
                <div className="bg-gray-300 dark:bg-gray-800 rounded-xl shadow-md flex flex-col items-center justify-start text-xl font-semibold p-6 text-center">
                    <h3 className="text-2xl mb-2 text-blue-600 dark:text-purple-800">
                        Other Technical Skills
                    </h3>
                    <ul className="list-disc list-inside text-base font-normal text-gray-700 dark:text-gray-200 text-left space-y-1">
                        <li>Proficient with xUnit for unit testing.</li>
                        <li>Experienced with Git and version control workflows.</li>
                        <li>Knowledgeable in asynchronous programming and concurrency patterns.</li>
                        <li>Understanding of RESTful APIs and client-server communication.</li>
                        <li>Basic experience with React and Next.js.</li>
                        <li>Strong grasp of OOP, SOLID principles, and data structures.</li>
                        <li>Familiar with SQL Server and SQLite database design.</li>
                        <li>Solid foundation in mathematics (calculus, linear algebra, discrete math, numerical analysis, ODEs).</li>
                    </ul>
                </div>

                {/* Soft Skills */}
                <div className="bg-gray-300 dark:bg-gray-800 rounded-xl shadow-md flex flex-col items-center justify-start text-xl font-semibold p-6 text-center">
                    <h3 className="text-2xl mb-2 text-blue-600 dark:text-purple-800">Soft Skills</h3>
                    <p className="text-base font-normal text-gray-700 dark:text-gray-200 mb-3">
                        Personal strengths and professional attributes:
                    </p>
                    <ul className="list-disc list-inside text-base font-normal text-gray-700 dark:text-gray-200 text-left space-y-1">
                        <li>Good communication skills.</li>
                        <li>Fast learning and adaptability.</li>
                        <li>Strong passion for software engineering and continuous learning.</li>
                        <li>Good stress management under pressure.</li>
                        <li>Effective time management and organization.</li>
                        <li>Strong analytical thinking and problem-solving skills.</li>
                    </ul>
                </div>

            </div>
        </section>
    );
}
