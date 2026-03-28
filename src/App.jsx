import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SocialLinks from "./components/SocialLinks";
import BackToTop from "./components/common/BackToTop";
import Footer from "./components/Footer";
import CustomCursor from "./components/common/CustomCursor";

function App() {
 
  return (
    <div className="bg-blue cursor-none">
      <div className="hidden lg:inline">
        <CustomCursor />
      </div>
      <ToastContainer />
      <BackToTop />
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <SocialLinks />
      <Footer />
    </div>
  );
}

export default App;