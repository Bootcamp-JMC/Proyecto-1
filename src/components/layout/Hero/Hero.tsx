import { FeaturesHero } from "./components/FeaturesHero";
import { ArrowRight } from "lucide-react";

const FeaturesList = [
  {
    value: "95%",
    label: "Job Placement",
  },
  {
    value: "500+",
    label: "Graduates",
  },
  {
    value: "4.9★",
    label: "Student Rating",
  },
];

export const Hero = () => {
  return (
    <div className="bg-gray-50 pt-15">
      <div className="m-4 text-center">
        <div className="text-bold mb-7 inline-flex items-center gap-2 rounded-full bg-purple-100 bg-linear-30 px-4 py-2 text-sm text-purple-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
            aria-hidden="true"
          >
            <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
            <path d="M20 2v4"></path>
            <path d="M22 4h-4"></path>
            <circle cx="4" cy="20" r="2"></circle>
          </svg>
          <span>Launch Your AI Career in 12 Weeks</span>
        </div>
        <h1 className="mb-6 text-5xl font-bold text-violet-600">
          Master AI & Machine Learning
        </h1>
        <p className="mb-11 text-[20px] leading-7 text-gray-600">
          Transform your career with our intensive bootcamp. Learn from industry
          experts, build real-world projects, and join a thriving community of
          AI professionals.
        </p>
        <div className="mb-16 flex flex-col items-center gap-4 text-white">
          <button className="flex items-center gap-2 rounded-xl bg-violet-600 px-8 py-4 shadow-lg transition-all hover:scale-105 hover:bg-purple-700">
            Start Your Journey <ArrowRight size={20} />
          </button>
          <button className="rounded-xl border-2 border-violet-600 px-8 py-4 text-purple-500">
            View Curriculum
          </button>
        </div>
        <div className="m-3 flex justify-between gap-10">
          <FeaturesHero features={FeaturesList} />
        </div>
      </div>
    </div>
  );
};
