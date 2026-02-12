import { CustomButton } from "../../../../ui/CustomButton";
import { PricingOutlineMapGrid } from "./PricingOutlineMapGrid";
import { PRICING_OUTLINE_GRID } from "../../data/PRICING_OUTLINE_GRID";

export const PricingOutline = () => {
  return (
    <div className="scale-105 flex-col rounded-2xl bg-white p-8 shadow-2xl">
      <button className="align-center flex rounded-full bg-purple-600 px-4 py-1 text-center text-sm text-white">
        Most Popular
      </button>
      <h3 className="mt-4 text-2xl font-bold">Full-Time Immersive</h3>
      <p className="mt-2 text-gray-600">Mon-Fri, 9am-5pm</p>
      <h2 className="mt-6 text-[48px] leading-none font-bold">$14,999</h2>
      <p className="mt-2 text-gray-700"> 12 weeks program</p>

      <PricingOutlineMapGrid pricingOutlineList={PRICING_OUTLINE_GRID} />

      <div className="mt-8 text-center">
        <CustomButton
          buttonText="Apply Now"
          variant="solid"
          customWidth="w-full"
          customHeight="h-[56px]"
          customRounded="rounded-[15px]"
          classNames="font-semibold"
        />
      </div>
    </div>
  );
};
