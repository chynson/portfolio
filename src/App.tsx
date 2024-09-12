import Intro from "./components/Intro.tsx";
import Projects from "./components/Projects.tsx";
import Contact from "./components/Contact.tsx";
import Bio from "./components/Bio.tsx";

function App() {

  return (
    <div className="App bg-background backdrop-blur-2xl flex justify-center">
        <div className="w-full md:w-[600px] lg:w-[900px] pb-28 ">
            <Intro />
            <Bio />
            <Projects />
            <Contact />
        </div>
    </div>
  )
}

export default App
