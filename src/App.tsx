import { BrowserRouter } from "react-router";
import { useRef } from "react";

import "./style.css";

import { Header } from "./components/layout/Header";
import { CallToAction } from "./components/layout/CallToAction/CallToAction";
import { Features } from "./components/layout/Features";
import { Hero } from "./components/layout/Hero";
import { Pricing } from "./components/layout/Pricing";
import { Testimonios } from "./components/layout/Testimonios";
import { Curriculum } from "./components/layout/Curriculum";
import { Footer } from "./components/layout/Footer";

const App = () => {
  const curriculumRef = useRef<HTMLDivElement | null>(null);
  const successRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const pricingRef = useRef<HTMLDivElement | null>(null);

  return (
    <BrowserRouter>
      <Header
        successStoriesRef={successRef}
        curriculumRef={curriculumRef}
        aboutRef={aboutRef}
        pricingRef={pricingRef}
      />

      <div className="bg-linear-to-r from-purple-50 via-white to-purple-50 pt-16.25">
        <Hero aboutRef={aboutRef} />
        <Features />
        <Curriculum curriculumRef={curriculumRef} />
        <Testimonios successStoriesRef={successRef} />
        <Pricing pricingRef={pricingRef} />
        <CallToAction />
      </div>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
