import { FeaturesHero } from "./components/FeaturesHero";
import { ArrowRight } from "lucide-react";
import { StarIcon } from "./components/StarIcon";
import { FeaturesList } from "./components/FeaturesList";

export const Hero = () => {
  return (
    <div className="pt-19.75">
      <div className="container mx-auto px-4 text-center lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="text-bold mb-8 inline-flex max-w-4xl items-center gap-2 rounded-full bg-purple-100 bg-linear-30 px-4 py-2 text-sm text-purple-700">
            <StarIcon />
            <span>Launch Your AI Career in 12 Weeks</span>
          </div>
          <h1 className="mb-6 text-5xl font-bold text-violet-600 md:text-6xl lg:text-7xl">
            Master AI & Machine Learning
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-[20px] leading-7 text-gray-600">
            Transform your career with our intensive bootcamp. Learn from
            industry experts, build real-world projects, and join a thriving
            community of AI professionals.
          </p>
          <div className="mb-16 flex flex-col items-center justify-center gap-4 text-white md:flex-row">
            <button className="flex items-center gap-2 rounded-[14px] bg-violet-600 px-8 py-4 shadow-lg transition-all hover:scale-105 hover:bg-purple-700">
              Start Your Journey <ArrowRight size={20} />
            </button>
            <button className="rounded-[14px] border-2 border-purple-600 px-8 py-4 text-purple-500">
              View Curriculum
            </button>
          </div>
          <div className="flex justify-between gap-5 sm:mx-1 sm:gap-18 md:mx-2 md:px-20 lg:px-40">
            <FeaturesHero features={FeaturesList} />
          </div>
        </div>
      </div>
    </div>
  );
};
