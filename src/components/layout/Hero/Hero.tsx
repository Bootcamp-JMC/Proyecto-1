import { HeroButtons } from "./components/HeroButtons";
import { HeroDescription } from "./components/HeroDescription";
import { HeroTitle } from "./components/HeroTitle";
import { HeroFeatures } from "./components/HeroFeatures";
import { HeroLabel } from "./components/HeroLabel";

export const Hero = () => {
  return (
    <div className="pt-19.75">
      <div className="container mx-auto px-4 text-center lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <HeroLabel />
          <HeroTitle />
          <HeroDescription />
          <HeroButtons />
          <HeroFeatures />
        </div>
      </div>
    </div>
  );
};
