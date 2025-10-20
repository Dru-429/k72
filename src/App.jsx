import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Agence from "./pages/Agence";
import Project from "./pages/Project";
import Navbar from "./pages/components/common/Navbar";

const App = () => {

  return (
    <div className="max-w-screen overflow-x-hidden min-h-screen bg-black  text-zinc-950">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </div>
  );
};

export default App;
