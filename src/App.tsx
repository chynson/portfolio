import Intro from "./components/Intro.tsx";
import Projects from "./components/Projects.tsx";
import Contact from "./components/Contact.tsx";
import Bio from "./components/Bio.tsx";

function App() {

  return (
    <div className="App">
        <div className="px-20 md:px-60 lg:px-80 pt-64 pb-28 backdrop-blur-2xl bg-background">
            <Intro />
            <Bio />
            <Projects />
            <Contact />
        </div>
    </div>
  )
}

export default App
