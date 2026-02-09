// import { Hero } from "./components/layout/Hero";
import { BrowserRouter } from "react-router";
import { Header } from "./components/layout/Header";

import "./style.css";
import { Pricing } from "./components/layout/Pricing";
// import { Features } from "./components/layout/Features";

const App = () => {
  return (
    <BrowserRouter>
      {/* Header */}
      <Header />
      <div className="mt-16.25 bg-linear-to-r from-purple-50 via-white to-purple-50">
        {/* Hero */}
        {/* <Hero /> */}

        {/* {Features} */}
        {/* <Features /> */}

        {/* Curriculum */}

        {/* {Pricing} */}
        <Pricing />
      </div>
    </BrowserRouter>
  );
};

export default App;
