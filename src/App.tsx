import { Hero } from "./components/layout/Hero/Hero";
import { BrowserRouter } from "react-router";
import { Header } from "./components/layout/Header";

import "./style.css";

const App = () => {
  return (
    <BrowserRouter>
      {/* Header */}
      <Header />

      {/* Hero */}
      <Hero />
      <Hero />
      {/* Features */}

      {/* Curriculum */}
    </BrowserRouter>
  );
};

export default App;
