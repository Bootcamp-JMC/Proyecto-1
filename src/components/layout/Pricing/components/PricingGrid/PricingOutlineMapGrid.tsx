import { Check } from "lucide-react";
import { PricingOutlineGrid } from "../../data/PRICING_OUTLINE_GRID";

interface PricingOutlineGridProps {
  pricingOutlineList: PricingOutlineGrid[];
}

export const PricingOutlineMapGrid = ({
  pricingOutlineList,
}: PricingOutlineGridProps) => {
  return (
    <div className="mt-6 flex flex-col gap-4">
      {pricingOutlineList.map((check) => (
        <div key={check.id} className="flex items-center gap-3">
          <Check className="text-purple-600" size={20} />
          <p className="text-gray-600">{check.text}</p>
        </div>
      ))}
    </div>
  );
};
