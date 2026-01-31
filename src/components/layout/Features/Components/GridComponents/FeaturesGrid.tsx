import { FeaturesGridListProps } from "./FeaturesGridList";

export const FeaturesGrid = ({ featuresList }: FeaturesGridListProps) => {
  return featuresList.map((feature) => (
    <div className="rounded-xl border border-gray-200" key={feature.id}>
      <div className="gap-5 p-8">
        {feature.icon}
        <h3 className="mb-3 text-xl">{feature.title}</h3>
        <p className="text-gray-500">{feature.text}</p>
      </div>
    </div>
  ));
};
