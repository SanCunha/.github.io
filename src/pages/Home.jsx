import Profile from "../components/Profile";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <>
   <Profile />
   <Projects />
      <div className="flex flex-col items-center justify-center py-8">
        <h1 className="text-3xl font-semibold">Let's work together.</h1>
        <p className="text-md font-normal text-gray-500 text-justify px-3">
        Are you looking for robust and efficient API development or expert planning and optimization for your logistics operations? I can help you! With a strong focus on creating seamless and high-performance APIs, I am dedicated to helping businesses streamline their processes and improve their logistics efficiency.
        </p>
        <p className="text-md font-normal text-gray-500 text-justify px-3">
        Let's collaborate to elevate your projects to the next level. Whether you need cutting-edge API solutions or strategic logistics planning, I'm here to ensure your success.
        </p>
      </div>
    </>
  );
}
