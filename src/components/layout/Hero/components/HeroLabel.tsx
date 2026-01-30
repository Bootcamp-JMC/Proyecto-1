import { StarIcon } from "./StarIcon";

export const HeroLabel = () => {
  return (
    <div className="text-bold mb-8 inline-flex max-w-4xl items-center gap-2 rounded-full bg-purple-100 bg-linear-30 px-4 py-2 text-sm text-purple-700">
      <StarIcon classname="w-4" />
      <span>Launch Your AI Career in 12 Weeks</span>
    </div>
  );
};
