import { CustomButton } from "../../../../ui/CustomButton";
import { PRICING_SOLID_GRID } from "../../data/PRICING_SOLID_GRID";
import { PricingGrid } from "./PricingSolidMapGrid";

export const PricingSolid = () => {
  return (
    <div className="flex-col rounded-2xl border-2 border-purple-700 bg-purple-800/50 px-8 py-8 text-white">
      <h3 className="text-2xl font-bold">Part-Time Flexible</h3>
      <p className="mt-2 text-[16px] text-purple-200">Evenings & Weekends</p>
      <h2 className="mt-6 text-[48px] leading-none font-bold">$12,999</h2>
      <p className="mt-2 text-[16px] text-purple-200">24 weeks program</p>

      <PricingGrid pricingSolidList={PRICING_SOLID_GRID} />

      <div className="mt-8 flex">
        <CustomButton
          buttonText="Apply Now"
          variant="outline"
          customWidth="w-full"
          customHeight="h-14"
          customRounded="rounded-[14px]"
          customTextColor="text-purple-900"
          classNames="font-semibold cursor-pointer"
        />
      </div>
    </div>
  );
};
