import { Hero } from "./components/layout/Hero";
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
      {/* Features */}

      {/* Curriculum */}
    </BrowserRouter>
  );
};

export default App;
