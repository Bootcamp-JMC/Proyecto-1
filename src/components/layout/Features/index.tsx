import { FeaturesDescription } from "./components/FeaturesDescription";
import { FeaturesTitle } from "./components/FeaturesTitle";
import { FeaturesGrid } from "./components/FeaturesGrid";
import { FEATURES_GRID_LIST } from "./components/data/FEATURES_GRID_LIST";

export const Features = () => {
  return (
    <div className="my-56">
      <div className="container mx-auto px-4 text-center">
        <div className="mx-auto h-full w-full text-center">
          <FeaturesTitle />
          <FeaturesDescription />
          <FeaturesGrid featuresList={FEATURES_GRID_LIST} />
        </div>
      </div>
    </div>
  );
};
