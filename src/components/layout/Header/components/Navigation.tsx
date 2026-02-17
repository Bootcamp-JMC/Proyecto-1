import { Temp1 } from "../../../ui/Temp";

type NavigationType = "Mobile" | "Desktop";

interface NavigationProps {
  NavigationType: NavigationType;
}

export const Navigation = ({ NavigationType }: NavigationProps) => {
  return (
    <div
      className={`flex ${
        NavigationType === "Mobile" ? "w-full flex-col gap-4" : "gap-8"
      }`}
    >
      <Temp1 linkText="Curriculum" linkTo="/curriculum" />
      <Temp1 linkText="Success Stories" linkTo="/success-stories" />
      <Temp1 linkText="Pricing" linkTo="/pricing" />
      <Temp1 linkText="About" linkTo="/about" />
    </div>
  );
};
