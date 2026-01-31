import { Hero } from "./components/layout/Hero/Hero";
import { BrowserRouter } from "react-router";
import { Header } from "./components/layout/Header";

import "./style.css";
import { Features } from "./components/layout/Features/Features";

const App = () => {
  return (
    <BrowserRouter>
      {/* Header */}
      <Header />

      {/* Hero */}
      <Hero />

      {/* {Features} */}
      <Features />

      {/* Curriculum */}
    </BrowserRouter>
  );
};

export default App;
