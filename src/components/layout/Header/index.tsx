import { MobileNavbar } from "./components/MobileNavbar";
import { DesktopNavbar } from "./components/DesktopNavbar";
import { Logo } from "../../ui/Logo";

export const Header = () => {
  return (
    <header>
      <nav className="fixed top-0 right-0 left-0 h-16.25 border-b border-gray-200 bg-white/70 backdrop-blur-lg md:bg-amber-200 lg:bg-red-200 xl:bg-blue-200 2xl:bg-orange-300">
        <div className="mx-auto flex h-full items-center justify-between px-4 md:container md:px-2 lg:px-4">
          <Logo />
          <DesktopNavbar />
          <MobileNavbar />
        </div>
      </nav>
    </header>
  );
};
