import { BrowserRouter } from "react-router";
import { Header } from "./components/layout/Header";

import "./style.css";

import { CallToAction } from "./components/layout/CallToAction/CallToAction";
import { Features } from "./components/layout/Features";
import { Hero } from "./components/layout/Hero";
import { Pricing } from "./components/layout/Pricing";
import { Testimonios } from "./components/layout/Testimonios";
import { Curriculum } from "./components/layout/Curriculum";

const App = () => {
  return (
    <BrowserRouter>
      {/* Header */}
      <Header />
      <div className="bg-linear-to-r from-purple-50 via-white to-purple-50 pt-16.25">
        {/* Hero */}
        <Hero />
        {/* Features */}
        <Features />
        {/* {CallToAction} */}
        <CallToAction />
        {/* Curriculum */}
        <Curriculum />
        {/* {Pricing} */}
        <Pricing />
      </div>
      {/* Testimonios */}
      <Testimonios />
    </BrowserRouter>
  );
};

export default App;
