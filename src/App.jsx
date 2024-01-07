import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Router/Home";
import Portfolio from "./Router/Portfolio";
import Skills from "./Router/Skills";
import Contact from "./Router/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
