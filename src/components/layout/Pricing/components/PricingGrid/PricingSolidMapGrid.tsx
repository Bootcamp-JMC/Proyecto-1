import { Check } from "lucide-react";
import { PricingSolidGrid } from "../../data/PRICING_SOLID_GRID";

interface PricingSolidGridProps {
  pricingSolidList: PricingSolidGrid[];
}

export const PricingGrid = ({ pricingSolidList }: PricingSolidGridProps) => {
  return (
    <div className="mt-6 flex flex-col gap-4">
      {pricingSolidList.map((check) => (
        <div key={check.id} className="flex items-center gap-3">
          <Check className="text-purple-300" size={20} />
          <p className="text-[16px] text-purple-100">{check.text}</p>
        </div>
      ))}
    </div>
  );
};
