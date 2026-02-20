import { PricingTitle } from "./components/PricingTitle";
import { PricingDescription } from "./components/PricingDescription";
import { PricingFooter } from "./components/PricingFooter";
import { PricingSolid } from "./components/PricingGrid/PricingSolidGrid";
import { PricingOutline } from "./components/PricingGrid/PricingOutlineGrid";

import { Ref } from "react";

interface PricingProps {
  pricingRef: Ref<HTMLDivElement>;
}

export const Pricing = ({ pricingRef }: PricingProps) => {
  return (
    <div
      className="mx-auto bg-linear-to-br from-purple-900 via-purple-800 to-violet-900 text-white"
      ref={pricingRef}
    >
      <div className="container mx-auto px-4 pt-23.75 text-center">
        <PricingTitle />
        <PricingDescription />
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 text-left text-black md:grid-cols-2 md:px-2 lg:px-0">
          <PricingOutline />
          <PricingSolid />
        </div>
        <PricingFooter />
      </div>
    </div>
  );
};
