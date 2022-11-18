import { useEffect, useState } from "react";
import LineGradient from "./components/LineGradient";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Landing from "./pages/Landing";
import Navbar from "./pages/Navbar";
import Pricing from './pages/Pricing';
import Services from "./pages/Services";
import Footer from './pages/Footer';

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="App">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        <Landing />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <About />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto">
        <Pricing />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <Services />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <Contact />
      </div>
      <LineGradient />
      <Footer />
    </div>
  );
}

export default App;
