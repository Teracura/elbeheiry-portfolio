"use client";

import Link from "next/link";

export default function NizamDeskPage() {
    return (
        <div className="bg-gray-50 dark:bg-gray-900 transition-colors duration-500 ease-in-out min-h-screen">
            <h1 className="text-5xl font-bold text-blue-600 dark:text-purple-800 text-center pt-20 mb-10">
                NizamDesk
            </h1>
            <div className="flex items-center justify-center loader mx-auto mb-6">
                <h2 className="text-2xl font-semibold mb-6 px-4">Project Analysis (why I did what I did):</h2>
            </div>
            <div className="max-w-3xl mx-auto text-gray-900 dark:text-gray-100 transition-colors duration-500 px-4">
                <p className="text-start mb-10 px-4">
                    This unfinished project is an attempt at making an employee and project management system combining some features of Jira and Discord, though what's made as of now is the login/logout. <br /><br />
                    <h2 className="text-2xl font-semibold mt-6 mb-4">Why Blazor? And why freeze the project?</h2>
                    Well, initially I didn't even choose Blazor, I actually went with ASP.NET MVC, but did not get the seamless frontend exprience I had similar to what I got with XAML in .NET MAUI <br /><br />
                    So I switched to Blazor, Because I heard it's way better and more modern than ASP.NET MVC, but I also wasn't comfortable with it, it was demoralizing, ASP.NET is great for backend in general but for web frontend I didn't get the best experience, I still believe I have had a much much better experience with XAML frontend using MVVM. <br /><br />
                    But I did learn a lot about Blazor and .NET web development in general, and I do believe that Blazor has great potential, but I believe that it's not as good of an experience as ReactJS. <br /><br />
                    But as I wrote more and more and got things working, I started to realize that I had many things done wrong, I did not setup JWT correctly, the layer architecture I planned has been flawed, the Services layer gave the exact same feeling the Logic layer did but with less lines of code. <br /><br />
                    I also realized that I was not following best practices for Blazor development, I was mixing UI logic with business logic, I was not using dependency injection correctly, and I was not using the built-in features of Blazor to their full potential. <br /><br />
                    And the most critical mistake I have made was designing the database schema incorrectly, It was confusing and didn't make sense, and by the time I realized it, I had already written a lot of code that depended on that schema. <br /><br />
                    So I had to stop development on this project, and take a step back, and re-evaluate my approach. and learn from my mistakes to not make them again in the future<br /><br />
                    <h2 className="text-2xl font-semibold mt-6 mb-4">What are my plans with the project?</h2>
                    I don't plan to return to this project again, however I do plan to copy certain aspects of the code into a new project, but using a different tech stack. <br /><br />
                    I would still use ASP.NET for the backend, but for the frontend I plan to use ReactJS with TypeScript, as now I have tried I got a way better front experience with it. <br /><br />
                    How I will do it is to make an API using ASP.NET Web API, and then make a ReactJS frontend that consumes the API. each in a separate project. independent<br /><br />
                    And I also plan to remake the whole database schema from scratch, making sure to not repeat the mistakes of the past. <br /><br />
                    So overall, this project was a great learning experience for me, and I am grateful for the mistakes I made, as they have helped me grow as a developer. and I will return to this project once I ensure my knowledge is deepened enough in other fields.
                </p>
            </div>

            <div className="flex items-center w-5xl justify-center loader mx-auto mb-10 gap-5">
                <Link href="/projects" >
                    <button className="mx-auto mt-10 px-6 py-3 bg-blue-600 dark:bg-purple-800 hover:bg-blue-700 dark:hover:bg-purple-900 text-white rounded-lg font-semibold transition-colors duration-300">
                        Back to Projects
                    </button>
                </Link>
                <Link href="/" >
                    <button className="mx-auto mt-10 px-6 py-3 bg-blue-600 dark:bg-purple-800 hover:bg-blue-700 dark:hover:bg-purple-900 text-white rounded-lg font-semibold transition-colors duration-300">
                        Back to Home
                    </button>
                </Link>
            </div>

        </div>
    );
}