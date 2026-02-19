import { StarIcon } from "./StarIcon";

type LogoVariant = "Purple" | "White";

interface LogoProps {
  variant: LogoVariant;
  customGap?: string;
}

export const Logo = ({ variant, customGap }: LogoProps) => {
  return (
    <div className={`flex items-center ${customGap ? customGap : "gap-2"}`}>
      <StarIcon classname="h-10 w-10 rounded-[14px] bg-purple-600 p-2 text-white" />
      <h1
        className={`text-xl font-bold text-purple-600 ${variant == "Purple" ? "text-purple-600" : "text-white"} `}
      >
        AI Academy
      </h1>
    </div>
  );
};
