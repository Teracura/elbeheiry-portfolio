import Header from "./header";
import Introduction from "./Introduction";
import Projects from "./projects";
import TechStack from "./Skills";

export default function Home() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 transition-colors duration-500 ease-in-out min-h-screen">
      <Header />
      <Introduction />
      <TechStack />
      <Projects />

    </div>
  );
}
