import { HeroButtons } from "./components/HeroButtons";
import { HeroDescription } from "./components/HeroDescription";
import { HeroTitle } from "./components/HeroTitle";
import { HeroLabel } from "./components/HeroLabel";
import { HERO_FEATURES_LIST } from "./data/HERO_FEATURES_LIST";
import { HeroFeatures } from "./components/HeroFeatures";

export const Hero = () => {
  return (
    <div className="bg-linear-to-r from-purple-50 via-white to-purple-50 pt-36">
      <div className="container mx-auto px-4 text-center lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <HeroLabel />
          <HeroTitle />
          <HeroDescription />
          <HeroButtons />
          <div className="w-max-2xl mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-8">
            <HeroFeatures features={HERO_FEATURES_LIST} />
          </div>
        </div>
      </div>
    </div>
  );
};
