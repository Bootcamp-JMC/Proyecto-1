interface FeatureProps {
  id: string;
  label: string;
  value: string;
  valueIcon: string;
}

interface Feature {
  features: FeatureProps[];
}

export const HeroFeatures = ({ features }: Feature) => {
  return features.map((feature) => (
    <div key={feature.id}>
      <div className="flex items-center justify-center text-4xl font-bold text-purple-600">
        {feature.value + feature.valueIcon}
      </div>
      <p className="mt-2 text-center text-sm text-gray-600">{feature.label}</p>
    </div>
  ));
};
