import { FeaturesGridList } from "./data/FEATURES_GRID_LIST";

export const FeaturesGrid = ({ featuresList }: FeaturesGridList) => {
  return (
    <div className="mt-16 grid gap-8 text-left sm:px-2 md:grid-cols-2 md:px-2 lg:grid-cols-3 lg:px-4">
      {featuresList.map((feature) => (
        <div
          className="group rounded-[15px] border-2 border-gray-100 transition-all hover:border-purple-200 hover:shadow-xl"
          key={feature.id}
        >
          <div className="gap-5 p-8">
            {feature.icon}
            <h3 className="mb-3 text-xl">{feature.title}</h3>
            <p className="leading-6.5 text-gray-600">{feature.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
