import { FeaturesGridListProps } from "./data/FEATURES_GRID_LIST";

export const FeaturesGrid = ({ featuresList }: FeaturesGridListProps) => {
  return featuresList.map((feature) => (
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
  ));
};
