import { HeroButtons } from "./components/HeroButtons";
import { HeroDescription } from "./components/HeroDescription";
import { HeroTitle } from "./components/HeroTitle";
import { HeroLabel } from "./components/HeroLabel";
import { HeroFeatures } from "./components/HeroFeatures";
import { HERO_FEATURES_LIST } from "./data/HERO_FEATURES_LIST";

export const Hero = () => {
  return (
    <div className="container mx-auto px-4 pt-36 text-center lg:px-8">
      <div className="mx-auto max-w-4xl">
        <HeroLabel />
        <HeroTitle />
        <HeroDescription />
        <HeroButtons />
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-8">
          <HeroFeatures features={HERO_FEATURES_LIST} />
        </div>
      </div>
    </div>
  );
};
