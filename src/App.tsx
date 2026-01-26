import { MenuHeader } from "./components/layout/Header/MenuHeader";
import { Hero } from "./components/layout/Hero/Hero";

import "./style.css";

const App = () => {
  return (
    <>
      {/* Header */}
      <MenuHeader />

      {/* Hero */}
      <Hero />
    </>
  );
};

export default App;
