import { CustomLink } from "../../../ui/CustomLink";

type NavigationType = "Mobile" | "Desktop";

interface NavigationProps {
  NavigationType: NavigationType;
}

export const Navigation = ({ NavigationType }: NavigationProps) => {
  return (
    <div
      className={`flex ${
        NavigationType === "Mobile"
          ? "w-full flex-col gap-4"
          : "gap-8"
      }`}
    >
      <CustomLink linkText="Curriculum" linkTo="/curriculum" />
      <CustomLink linkText="Success Stories" linkTo="/success-stories" />
      <CustomLink linkText="Pricing" linkTo="/pricing" />
      <CustomLink linkText="About" linkTo="/about" />
    </div>
  );
};
