import { FeaturesDescription } from "./Components/FeaturesDescription";
import { FeaturesTitle } from "./Components/FeaturesTitle";
import { FeaturesGrid } from "./Components/GridComponents/FeaturesGrid";
import { FeaturesGridList } from "./Components/GridComponents/FeaturesGridList";

export const Features = () => {
  return (
    <div className="mt-70">
      <div className="container mx-auto px-4 text-center">
        <div className="mx-auto max-w-4xl text-center">
          <FeaturesTitle />
          <FeaturesDescription />
          <div className="mt-15 grid gap-8 text-left">
            <FeaturesGrid featuresList={FeaturesGridList} />
          </div>
        </div>
      </div>
    </div>
  );
};
