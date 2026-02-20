import { CustomButton } from "../../../ui/CustomButton";
import { Navigation } from "./Navigation";

interface DesktopNavbarProps {
  pricingRef: React.RefObject<HTMLDivElement | null>;
  curriculumRef: React.RefObject<HTMLDivElement | null>;
  successStoriesRef: React.RefObject<HTMLDivElement | null>;
  aboutRef: React.RefObject<HTMLDivElement | null>;
}

export const DesktopNavbar = ({
  pricingRef,
  aboutRef,
  curriculumRef,
  successStoriesRef,
}: DesktopNavbarProps) => {
  return (
    <div className="hidden items-center gap-7.75 pr-4 text-[16px] md:flex">
      <Navigation
        NavigationType="Desktop"
        pricingRef={pricingRef}
        aboutRef={aboutRef}
        curriculumRef={curriculumRef}
        successStoriesRef={successStoriesRef}
      />
      <CustomButton buttonText="Apply Now" variant="solid" />
    </div>
  );
};
