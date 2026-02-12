import { Hero } from "./components/layout/Hero";
import { BrowserRouter } from "react-router";
import { Header } from "./components/layout/Header";

import "./style.css";
import { Features } from "./components/layout/Features";
import { Curriculum } from "./components/layout/Curriculum/Curriculum";

const App = () => {
  return (
    <BrowserRouter>
      {/* Header */}
      <Header />
      <div className="bg-linear-to-r from-purple-50 via-white to-purple-50">
        {/* Hero */}
        <Hero />
        {/* Features */}
        <Features />
        {/* Curriculum */}
        <Curriculum />
      </div>
    </BrowserRouter>
  );
};

export default App;
