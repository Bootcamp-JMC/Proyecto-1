import { ArrowRight } from "lucide-react";

export const HeroButtons = () => {
  return (
    <div className="mb-16 flex flex-col items-center justify-center gap-4 text-white sm:flex-row">
      <button className="bg-primary flex items-center gap-2 rounded-[14px] px-8 py-4 shadow-xl transition-all hover:scale-105 hover:bg-purple-700">
        Start Your Journey <ArrowRight size={20} />
      </button>
      <button className="rounded-[14px] border-2 border-purple-600 px-8 py-4 text-purple-600">
        View Curriculum
      </button>
    </div>
  );
};
