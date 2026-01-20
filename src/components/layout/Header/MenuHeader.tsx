import { ColoredButton } from "../../ui/ColoredButton";
import { Hamburger } from "./components/Hamburger";

export const MenuHeader = () => {
  return (
    <>
      <header>
        <nav className="fixed top-0 right-0 left-0 h-16.25 border-b border-gray-200">
          <div className="flex h-full w-full items-center justify-between px-[5%]">
            <div className="flex items-center">
              <div className="rounded-md bg-purple-500">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6 text-white"
                >
                  <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
                </svg>
              </div>

              <h1 className="bg-linear-to-r from-purple-600 to-violet-600 bg-clip-text text-[25px] font-bold text-transparent">
                AI Academy
              </h1>
            </div>

            <div className="text-md hidden items-center gap-10 lg:flex">
              <a href="" className="text-gray-700 hover:text-purple-600">
                Curriculum
              </a>
              <a href="" className="text-gray-700 hover:text-purple-600">
                Success Stories
              </a>
              <a href="" className="text-gray-700 hover:text-purple-600">
                Pricing
              </a>
              <a href="" className="text-gray-700 hover:text-purple-600">
                About
              </a>

              <ColoredButton name="Apply Now" />
            </div>

            <Hamburger></Hamburger>
          </div>
        </nav>
      </header>
    </>
  );
};
