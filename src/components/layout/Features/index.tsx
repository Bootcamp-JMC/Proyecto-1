import { FeaturesDescription } from "./components/FeaturesDescription";
import { FeaturesTitle } from "./components/FeaturesTitle";
import { FeaturesGrid } from "./components/FeaturesGrid";
import { FEATURES_GRID_LIST } from "./data/FEATURES_GRID_LIST";

export const Features = () => {
  return (
    <div className="container mx-auto h-full w-full px-4 py-56 text-center">
      <FeaturesTitle />
      <FeaturesDescription />
      <FeaturesGrid featuresList={FEATURES_GRID_LIST} />
    </div>
  );
};
