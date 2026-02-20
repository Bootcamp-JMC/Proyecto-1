import { NavigationButton } from "../../../ui/NavigationButton";

type NavigationType = "Mobile" | "Desktop";

interface NavigationProps {
  NavigationType: NavigationType;
  pricingRef: React.RefObject<HTMLDivElement | null>;
  curriculumRef: React.RefObject<HTMLDivElement | null>;
  successStoriesRef: React.RefObject<HTMLDivElement | null>;
  aboutRef: React.RefObject<HTMLDivElement | null>;
}

export const Navigation = ({
  NavigationType,
  pricingRef,
  aboutRef,
  curriculumRef,
  successStoriesRef,
}: NavigationProps) => {
  return (
    <div
      className={`flex ${
        NavigationType === "Mobile" ? "w-full flex-col gap-4" : "gap-8"
      }`}
    >
      <NavigationButton sectionRef={curriculumRef} buttonName="Curriculum" />
      <NavigationButton
        sectionRef={successStoriesRef}
        buttonName="Success Stories"
      />
      <NavigationButton sectionRef={pricingRef} buttonName="Pricing" />
      <NavigationButton sectionRef={aboutRef} buttonName="About" />
    </div>
  );
};
