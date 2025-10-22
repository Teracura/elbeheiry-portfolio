import Link from "next/link";
import AbstractSortDocumentation from "./documentation";

export default function NizamDeskLearnMore() {
    return (
        <div className="bg-gray-50 dark:bg-gray-900 transition-colors duration-500 ease-in-out min-h-screen">
            <h1 className="text-5xl font-bold text-blue-600 dark:text-purple-800 text-center pt-20 mb-10">
                Teracura.AbstractSort
            </h1>
            <div className="flex items-center justify-center loader mx-auto mb-6">
                <h2 className="text-2xl font-semibold mb-6 px-4">Project Overview:</h2>
            </div>
            <div className="max-w-3xl mx-auto text-gray-900 dark:text-gray-100 transition-colors duration-500 px-4">
                <p className="text-start mb-10 px-4">
                    A C# class library that provides a collection of abstract sorting algorithms using <strong>LINQ</strong>, allowing developers to easily implement and utilize various sorting techniques in their applications. <br /><br />
                    This library, as the name suggests, includes sorting standards that are... abstract, and a bit unusual, but that's the point of the project.<br /><br />
                    It has my first written <strong>documentation</strong>, my first real implementation of the <strong>builder</strong> pattern, and my first <strong>unit tests</strong> using <strong>xUnit</strong> as well as my first attempt at doing git branching.<br /><br />
                    Some features include default sorting in this class library using a <strong>custom comparer</strong>, with the capability of sorting objects of different types in the same <strong>IEnumerable</strong>, sorting by version string, and more.<br /><br />
                    It is also made to be highly customizable, depending on the configuration you make, you can customize the behavior so it fits your needs for example: <br /><br />
                    want the sorting to return the result while keeping the original IEnumerable in place? you can! want it to sort in descending order? you can! want it to ignore case sensitivity? you can! want it to not return a copy and instead edit the IEnumerable in place? you can! want sorting via string reflection? you can! Lambda expressions? you can! want to sort objects inside objects inside even more objects? you can! want sorting based on more than one standard? you also can! and more<br /><br />
                    In this project I have learned unit testing, TDD (Test Driven Development), designing for extensibility and reusability, and how to write proper documentation. aswell as writing a class library that extends upon existing classes in C# (IEnumerable in particular) and learned about generics in general!<br /><br />
                    It's some of the most fun I've had in a project ever, the MVP is done but my ambitions go way beyond what's already made.
                </p>
            </div>


            <AbstractSortDocumentation />

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
