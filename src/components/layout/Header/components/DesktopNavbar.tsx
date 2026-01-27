import { CustomButton } from "../../../ui/CustomButton";
import { Navigation } from "./Navigation";

export const DesktopNavbar = () => {
  return (
    <div className="hidden items-center gap-5 text-[16px] md:flex md:px-2 lg:gap-8 lg:px-20.5">
      <Navigation />
      <CustomButton buttonText="Apply Now" variant="solid" />
    </div>
  );
};
