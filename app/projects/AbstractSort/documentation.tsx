"use client";

export default function AbstractSortDocumentation() {
    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100 transition-colors duration-500 p-8">
            <div className="max-w-5xl mx-auto space-y-10">
                {/* Overview */}
                <section className="space-y-4">
                    <h2 className="text-3xl font-semibold">Overview</h2>
                    <p className="leading-relaxed">
                        <strong>Teracura.AbstractSort</strong> is a lightweight and extensible sorting utility for .NET that provides a fluent,
                        configuration-driven API for sorting collections that implement <code>IEnumerable&lt;T&gt;</code>.
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Sorting by property paths (<strong>Reflection</strong>) or by <strong>Lambda expressions</strong>.</li>
                        <li>Multiple sorting modes:
                            <ul className="list-disc list-inside ml-5">
                                <li><strong>Default</strong> (type-aware, custom comparer for mixed types)</li>
                                <li><strong>Length</strong> (string length → alphabetical)</li>
                                <li><strong>Version</strong> (semantic-like version ordering)</li>
                            </ul>
                        </li>
                        <li>Multiple return types: <code>List</code>, <code>Queue</code>, <code>Stack</code>, <code>HashSet</code>.</li>
                        <li>Optional in-place mutation of the original collection.</li>
                        <li>Case sensitivity control.</li>
                        <li>Multi-level sorting with <code>SortBy</code> + <code>ThenBy</code> chaining.</li>
                        <li>Robust handling of null values, NaN, and infinities.</li>
                    </ul>
                </section>

                {/* Core API */}
                <section className="space-y-4">
                    <h2 className="text-3xl font-semibold">Core API</h2>
                    <h3 className="text-2xl font-semibold">
                        <code>AbstractSorter.Sort&lt;T&gt;(this IEnumerable&lt;T&gt; list, SortConfig&lt;T&gt; config)</code>
                    </h3>
                    <p className="leading-relaxed">
                        Sorts an object that implements <code>IEnumerable&lt;T&gt;</code> according to the provided configuration.
                    </p>
                    <p className="font-semibold">Parameters:</p>
                    <ul className="list-disc list-inside space-y-1">
                        <li><strong>list</strong> — The list to be sorted.</li>
                        <li><strong>config</strong> — A <code>SortConfig&lt;T&gt;</code> instance describing sorting mode, selectors, and behavior.</li>
                    </ul>
                    <p className="leading-relaxed">
                        Applies sorting based on <code>SortConfig.SortMode</code>. Returns the sorted data in the specified format. Optionally mutates the original collection.
                    </p>
                    <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
                        {`var people = new List<Person>
{
    new("Alice", 30),
    new("Bob", 25),
    new("Charlie", 35)
};

var config = new SortConfig<Person>.Builder()
    .SortBy(p => p.Name)
    .Ascending(false)
    .ReturnType(ReturnType.Queue)
    .Build();

var queue = (Queue<Person>)people.Sort(config);`}
                    </pre>
                </section>

                {/* Sorting Modes */}
                <section className="space-y-4">
                    <h2 className="text-3xl font-semibold">Sorting Modes</h2>

                    {/* Default */}
                    <div className="space-y-2">
                        <h3 className="text-2xl font-semibold">1. Default Sorting</h3>
                        <p className="leading-relaxed">Uses <strong>MultiObjectComparer</strong> for <code>IEnumerable&lt;object&gt;</code> to handle mixed types with a consistent precedence:</p>
                        <ol className="list-decimal list-inside space-y-1 ml-5">
                            <li>null</li>
                            <li>Numbers (int, long, decimal, float, double)</li>
                            <li>bool</li>
                            <li>string</li>
                            <li>DateTime</li>
                            <li>Guid</li>
                            <li>TimeSpan</li>
                            <li>Array</li>
                            <li>ValueTuple</li>
                            <li>Delegate</li>
                            <li>Other types (by <code>ToString()</code>)</li>
                        </ol>
                        <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
                            {`var items = new List<object?> { null, 42, "apple", 3.14, DateTime.Now };
var config = new SortConfig<object>.Builder().Build();
var sorted = (List<object?>)items.Sort(config);`}
                        </pre>
                    </div>

                    {/* Length */}
                    <div className="space-y-2">
                        <h3 className="text-2xl font-semibold">2. Length Sorting</h3>
                        <p className="leading-relaxed">Orders by <strong>string length</strong>, then alphabetically/numerically. Null is treated as length -1.</p>
                        <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
                            {`var fruits = new List<string> { "banana", "kiwi", "apple", "fig" };
var config = new SortConfig<string>.Builder()
    .Mode(SortMode.Length)
    .Build();
var sorted = (List<string>)fruits.Sort(config); // Result: ["fig", "kiwi", "apple", "banana"]`}
                        </pre>
                    </div>

                    {/* Version */}
                    <div className="space-y-2">
                        <h3 className="text-2xl font-semibold">3. Version Sorting</h3>
                        <p className="leading-relaxed">Sorts strings representing dot-separated numbers (e.g., "1.0.3"). Missing parts treated as 0.</p>
                        <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
                            {`var versions = new List<string> { "1.0", "1.0.1", "1.1", "2.0" };
var config = new SortConfig<string>.Builder()
    .Mode(SortMode.Version)
    .Build();
var sorted = (List<string>)versions.Sort(config);`}
                        </pre>
                    </div>
                </section>

                {/* SortConfig */}
                <section className="space-y-4">
                    <h2 className="text-3xl font-semibold">SortConfig</h2>
                    <p className="leading-relaxed">Encapsulates all sorting preferences, created via <code>SortConfig&lt;T&gt;.Builder</code>.</p>

                    <table className="table-auto border border-gray-300 dark:border-gray-700 w-full text-left mb-4">
                        <thead>
                            <tr className="bg-gray-200 dark:bg-gray-800">
                                <th className="border px-4 py-2">Property</th>
                                <th className="border px-4 py-2">Default</th>
                                <th className="border px-4 py-2">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border">
                                <td className="border px-4 py-2">ReflectionPaths</td>
                                <td className="border px-4 py-2">[]</td>
                                <td className="border px-4 py-2">Paths to properties for reflection-based sorting.</td>
                            </tr>
                            <tr className="border">
                                <td className="border px-4 py-2">LambdaSelectors</td>
                                <td className="border px-4 py-2">[]</td>
                                <td className="border px-4 py-2">Lambda selectors for sorting.</td>
                            </tr>
                            <tr className="border">
                                <td className="border px-4 py-2">SortingMethod</td>
                                <td className="border px-4 py-2">Reflection</td>
                                <td className="border px-4 py-2">Reflection or Lambda.</td>
                            </tr>
                            <tr className="border">
                                <td className="border px-4 py-2">SortMode</td>
                                <td className="border px-4 py-2">None</td>
                                <td className="border px-4 py-2">Sorting mode (None, Length, Version).</td>
                            </tr>
                            <tr className="border">
                                <td className="border px-4 py-2">Ascending</td>
                                <td className="border px-4 py-2">true</td>
                                <td className="border px-4 py-2">Sort order.</td>
                            </tr>
                            <tr className="border">
                                <td className="border px-4 py-2">CaseSensitive</td>
                                <td className="border px-4 py-2">true</td>
                                <td className="border px-4 py-2">Controls string case sensitivity.</td>
                            </tr>
                            <tr className="border">
                                <td className="border px-4 py-2">MutateOriginal</td>
                                <td className="border px-4 py-2">false</td>
                                <td className="border px-4 py-2">Whether to change original list.</td>
                            </tr>
                            <tr className="border">
                                <td className="border px-4 py-2">ReturnType</td>
                                <td className="border px-4 py-2">List</td>
                                <td className="border px-4 py-2">Return type after sorting.</td>
                            </tr>
                            <tr className="border">
                                <td className="border px-4 py-2">AllowPrivateAccess</td>
                                <td className="border px-4 py-2">false</td>
                                <td className="border px-4 py-2">Allows access to private data for reflection.</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                {/* Builder API */}
                <section className="space-y-4">
                    <h2 className="text-3xl font-semibold">Builder API</h2>
                    <p className="leading-relaxed">Fluent API for creating <code>SortConfig&lt;T&gt;</code>:</p>
                    <ul className="list-disc list-inside space-y-1">
                        <li><code>SortBy(string path)</code> — Primary sort key via reflection path.</li>
                        <li><code>SortBy(Func&lt;T, object?&gt; selector)</code> — Primary sort key via lambda.</li>
                        <li><code>ThenBy(string path)</code> — Secondary reflection key.</li>
                        <li><code>ThenBy(Func&lt;T, object?&gt; selector)</code> — Secondary lambda key.</li>
                        <li><code>Mode(SortMode mode)</code> — Sorting mode.</li>
                        <li><code>MutateOriginal(bool)</code> — In-place mutation.</li>
                        <li><code>Ascending(bool)</code> — Sort order (max 9 calls = Easter egg).</li>
                        <li><code>CaseSensitive(bool)</code> — Case sensitivity.</li>
                        <li><code>ReturnType(ReturnType type)</code> — Return type after sorting.</li>
                        <li><code>AllowPrivateAccess(bool)</code> — Access private fields for reflection.</li>
                        <li><code>Build()</code> — Returns configured <code>SortConfig&lt;T&gt;</code>.</li>
                    </ul>
                </section>

                {/* Examples */}
                <section className="space-y-4">
                    <h2 className="text-3xl font-semibold">Examples</h2>

                    <p className="leading-relaxed">Reflection-based Length Sorting:</p>
                    <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
                        {`var config = new SortConfig<Person>.Builder()
    .SortBy("Name")
    .ThenBy("Age")
    .Mode(SortMode.Length)
    .Build();`}
                    </pre>

                    <p className="leading-relaxed">Lambda-based Version Sorting:</p>
                    <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
                        {`var config = new SortConfig<Person>.Builder()
    .SortBy(p => p.VersionString)
    .Mode(SortMode.Version)
    .Build();`}
                    </pre>

                    <p className="leading-relaxed">Return Types:</p>
                    <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
                        {`var config = new SortConfig<string>.Builder()
    .ReturnType(ReturnType.Stack)
    .Build();
var stack = (Stack<string>)myList.Sort(config);`}
                    </pre>
                </section>

                {/* Notes */}
                <section className="space-y-4">
                    <h2 className="text-3xl font-semibold">Notes & Rules</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Cannot mix reflection and lambda selectors in the same config.</li>
                        <li>Chaining with <code>ThenBy</code> is unlimited in depth.</li>
                        <li>Null values are handled gracefully.</li>
                        <li>For <code>SortMode.Version</code>, <code>T</code> must be <code>string</code>.</li>
                        <li>Reflection selectors can access nested properties (e.g., "Address.City.Name").</li>
                        <li>If no selector is given for reflection and <code>T</code> is not primitive/string, sorting will throw.</li>
                        <li>Even with <code>MutateOriginal</code> set to true, immutable values won't be mutated.</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}
