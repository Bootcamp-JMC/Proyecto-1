interface FeatureProps {
  label: string;
  value: string;
  valueIcon: string;
}

interface FeaturesProps {
  features: FeatureProps[];
}

export const FeaturesHero = ({ features }: FeaturesProps) => {
  return features.map((feature) => (
    <div key={feature.value + feature.label}>
      <div className="flex items-center justify-center text-4xl font-bold text-purple-600">
        {feature.value + feature.valueIcon}
      </div>
      <p className="mt-2 text-center text-sm text-gray-600">{feature.label}</p>
    </div>
  ));
};
