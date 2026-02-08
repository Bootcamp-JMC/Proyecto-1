import { CustomButton } from "../../../ui/CustomButton";
import { Navigation } from "./Navigation";

export const DesktopNavbar = () => {
  return (
    <div className="hidden items-center gap-7.75 pr-4 text-[16px] md:flex">
      <Navigation NavigationType="Desktop" />
      <CustomButton buttonText="Apply Now" variant="solid" />
    </div>
  );
};
