import { Hero } from "./components/layout/Hero/Hero";
import { BrowserRouter } from "react-router";
import { Header } from "./components/layout/Header";

import "./style.css";
import { Features } from "./components/layout/Features/Features";
import { Curriculum } from "./components/layout/Curriculum/Curriculum";

const App = () => {
  return (
    <BrowserRouter>
      {/* Header */}
      <Header />

      {/* Hero */}
      <Hero />

      {/* Features */}
      <Features />

      {/* Curriculum */}
      <Curriculum />
    </BrowserRouter>
  );
};

export default App;
