import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Agence from "./pages/Agence";
import Project from "./pages/Project";

const App = () => {

  return (
    <div className="max-w-screen overflow-x-hidden min-h-screen bg-black  text-zinc-950">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </div>
  );
};

export default App;
