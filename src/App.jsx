import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Agence from "./pages/Agence";
import Navbar from "./components/common/Navbar";
import FullScreenNav from "./components/common/FullScreenNav";
import Work from "./pages/Work";
import { useEffect, useState } from "react";
import ReactLenis from "lenis/react";
import "./index.css";


const App = () => {

  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
  // Force scrollbar styling on mount
  const style = document.createElement('style')
  style.textContent = `
    ::-webkit-scrollbar {
      width: 8px;
      background: transparent;
    }
    ::-webkit-scrollbar-track {
      background: transparent !important;
    }
    ::-webkit-scrollbar-button {
      display: none !important;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #FFFF00;
      border-radius: 10px;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    ::-webkit-scrollbar-thumb:hover {
      opacity: 1;
    }
  `
  document.head.appendChild(style)
}, [])


  // Apply opacity to scrollbar dynamically
  useEffect(() => {
    if (isScrolled) {
      document.documentElement.style.setProperty('--scrollbar-opacity', '1')
    } else {
      document.documentElement.style.setProperty('--scrollbar-opacity', '0')
    }
  }, [isScrolled])


  return (
    <ReactLenis root>
      <div className="app max-w-screen overflow-x-hidden min-h-screen bg-black  text-zinc-950">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fullnav" element={<FullScreenNav />} />
          <Route path="/agence" element={<Agence />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </div>
    </ReactLenis>
  );
};

export default App;
