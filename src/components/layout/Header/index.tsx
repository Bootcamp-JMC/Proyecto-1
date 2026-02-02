import { MobileNavbar } from "./components/MobileNavbar";

import { DesktopNavbar } from "./components/DesktopNavbar";
import { StarIcon } from "../../ui/StarIcon";

export const Header = () => {
  return (
    <header>
      <nav className="fixed top-0 right-0 left-0 h-16.25 border-b border-gray-200 bg-white/80 backdrop-blur-lg">
        <div className="mx-auto flex h-full w-full items-center justify-between px-4 md:container md:px-2 lg:px-4">
          <div className="flex items-center gap-2 md:pl-4">
            <StarIcon classname="h-10 w-10 rounded-[14px] bg-purple-600 p-2 text-white" />
            <h1 className="text-xl font-bold text-purple-600">AI Academy</h1>
          </div>
          <DesktopNavbar />
          <MobileNavbar />
        </div>
      </nav>
    </header>
  );
};
