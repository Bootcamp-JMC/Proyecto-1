import { BrowserRouter } from "react-router";
import { Header } from "./components/layout/Header";

import "./style.css";
import { CallToAction } from "./components/layout/CallToAction/CallToAction";
import { Features } from "./components/layout/Features";
import { Hero } from "./components/layout/Hero";

const App = () => {
  return (
    <BrowserRouter>
      {/* Header */}
      <Header />
      <div className="bg-linear-to-r from-purple-50 via-white to-purple-50 pt-16.25">
        {/* Hero */}
        <Hero />

        {/* {Features} */}
        <Features />

        {/* Curriculum */}

        {/* {CallToAction} */}
        <CallToAction />
      </div>
    </BrowserRouter>
  );
};

export default App;
