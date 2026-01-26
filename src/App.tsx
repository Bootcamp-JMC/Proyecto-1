import { MenuHeader } from "./components/layout/Header/MenuHeader";
import { ArrowRight, Star } from "lucide-react";

import "./style.css";

const App = () => {
  return (
    <>
      {/* Header */}
      <MenuHeader />

        {/* Hero */}
        <div className="flex-1 bg-purple-500/2 pt-16.25">
          <div className="mx-auto mt-19.75 max-w-4xl text-center">
            <div className="mx-auto inline-flex items-center justify-center gap-2 rounded-4xl bg-purple-100 px-4 py-2 text-purple-600">
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
                className="lucide lucide-sparkles h-4 w-4"
                aria-hidden="true"
              >
                <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
                <path d="M20 2v4" />
                <path d="M22 4h-4" />
                <circle cx="4" cy="20" r="2" />
              </svg>
              <span className="text-[14px] text-purple-700">
                Launch Your AI Career in 12 Weeks
              </span>
            </div>

            <h1 className="mt-8 bg-linear-to-r from-purple-600 via-violet-600 to-purple-600 bg-clip-text text-5xl text-[70px] font-bold text-transparent sm:text-6xl lg:text-7xl">
              Master AI & Machine Learning
            </h1>

            <p className="mx-auto mt-5.5 w-2xl items-center text-[20px] leading-7 text-gray-600">
              Transform your career with our intensive bootcamp. Learn from
              industry experts, build real-world projects, and join a thriving
              community of AI professionals.
            </p>

            <div className="mt-10 flex justify-center gap-4">
              <button className="flex items-center gap-2 rounded-2xl bg-violet-600 px-8 text-white hover:bg-purple-700">
                Start Your Journey <ArrowRight size={24} />
              </button>
              <button className="rounded-xl border-2 border-purple-700 bg-white px-8 py-[15px] text-purple-700 hover:bg-gray-50">
                View Curriculum
              </button>
            </div>

            <div className="mx-42 mt-15 flex justify-between text-[13px]">
              <div>
                <span className="text-4xl font-bold text-violet-600">95%</span>
                <p>Job Placement</p>
              </div>
              <div>
                <span className="text-4xl font-bold text-violet-600">500+</span>
                <p>Graduates</p>
              </div>
              <div>
                <span className="flex items-center text-4xl font-bold text-violet-600">
                  4.9★
                </span>
                <p>Student Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}

      {/* Curriculum */}
    </>
  );
};

export default App;
