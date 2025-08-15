import React from "react";
import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Shortener from "./components/Shortener"; 
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Resources from "./pages/Resources";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Shortener />
            </>
          }
        />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </>
  );
}

export default App;
