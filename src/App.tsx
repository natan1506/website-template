import { useEffect, useState } from "react";
import Navbar from "./components/Navbar"
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <BrowserRouter>
      <div className="min-h-screen bg-palette-white">
        <Navbar scrollPosition={scrollPosition} />
        <div className="h-[200%] p-4 mt-20">
          <Router />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
