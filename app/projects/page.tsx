import Link from "next/link";

export default function ProjectsFallBack() {
    return (
        <div className="bg-gray-50 dark:bg-gray-900 transition-colors duration-500 ease-in-out min-h-screen">
            <h1 className="text-5xl font-bold text-blue-600 dark:text-purple-800 text-center pt-20 mb-10">
                Projects:
            </h1>
            <div className="flex items-center justify-center loader mx-auto mb-6">
                    <Link href="/projects/AbstractSort">
                        <button className="mx-auto mt-10 px-6 py-3 bg-blue-600 dark:bg-purple-800 hover:bg-blue-700 dark:hover:bg-purple-900 text-white rounded-lg font-semibold transition-colors duration-300">
                            Teracura.AbstractSort
                        </button>
                    </Link>
            </div>

            <p className="text-center">
                return to the <a href="/" className="underline">homepage</a>?
            </p>


        </div>
    );
}
