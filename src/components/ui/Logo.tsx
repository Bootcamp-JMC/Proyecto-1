import { StarIcon } from "./StarIcon";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <StarIcon classname="h-10 w-10 rounded-[14px] bg-purple-600 p-2 text-white" />
      <h1 className="text-xl font-bold text-purple-600">AI Academy</h1>
    </div>
  );
};
