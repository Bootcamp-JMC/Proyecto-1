import { FeaturesHero } from "./FeaturesHero";
import { FeaturesList } from "./FeaturesList";

export const HeroFeatures = () => {
  return (
    <>
      <div className="flex justify-between gap-5 sm:mx-1 sm:gap-18 md:mx-2 md:px-20 lg:px-40">
        <FeaturesHero features={FeaturesList} />
      </div>
    </>
  );
};
