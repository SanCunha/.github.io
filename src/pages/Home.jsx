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
        I'm here to enhance your projects and streamline your operations. Let's collaborate and transform your ideas into reality. Whether it's building powerful APIs or crafting tools for internal efficiency, I'm committed to driving your success
        </p>
      </div>
    </>
  );
}
