import { CustomButton } from "../../../ui/CustomButton";
import { Navigation } from "./Navigation";

export const DesktopNavbar = () => {
  return (
    <div className="hidden items-center gap-8 px-4 text-[16px] md:flex">
      <Navigation />
      <CustomButton buttonText="Apply Now" variant="solid" />
    </div>
  );
};
