import { FeaturesDescription } from "./Components/FeaturesDescription";
import { FeaturesTitle } from "./Components/FeaturesTitle";
import { FeaturesGrid } from "./Components/GridComponents/FeaturesGrid";
import { FeaturesGridList } from "./Components/GridComponents/FeaturesGridList";

export const Features = () => {
  return (
    <div className="my-56">
      <div className="container mx-auto px-4 text-center">
        <div className="mx-auto h-full w-full text-center">
          <FeaturesTitle />
          <FeaturesDescription />
          <div className="mt-16 grid gap-8 text-left sm:px-2 md:grid-cols-2 md:px-2 lg:grid-cols-3 lg:px-4">
            <FeaturesGrid featuresList={FeaturesGridList} />
          </div>
        </div>
      </div>
    </div>
  );
};
