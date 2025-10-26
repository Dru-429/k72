import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Agence from "./pages/Agence";
import Navbar from "./components/common/Navbar";
import FullScreenNav from "./components/common/FullScreenNav";
import Work from "./pages/Work";

const App = () => {

  return (
    <div className="max-w-screen overflow-x-hidden min-h-screen bg-black  text-zinc-950">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fullnav" element={<FullScreenNav />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </div>
  );
};

export default App;
