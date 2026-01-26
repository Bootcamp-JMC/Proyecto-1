interface FeatureProps {
  label: string;
  value: string;
}

interface FeaturesProps {
  features: FeatureProps[];
}

export const FeaturesHero = ({ features }: FeaturesProps) => {
  return features.map((feature) => (
    <div key={feature.value + feature.label}>
      <h1 className="text-4xl font-bold text-purple-600">{feature.value} </h1>
      <p className="mt-2 text-center text-sm text-gray-500">{feature.label}</p>
    </div>
  ));
};
