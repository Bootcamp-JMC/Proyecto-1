import { MobileNavbar } from "./components/MobileNavbar";
import { Logo } from "../../ui/Logo";
import { DesktopNavbar } from "./components/DesktopNavbar";

export const Header = () => {
  return (
    <header>
      <nav className="relative top-0 right-0 left-0 h-16.25 border-b border-gray-200">
        <div className="flex h-full w-full items-center justify-between px-4 md:px-8.25 lg:px-0">
          <Logo />
          <DesktopNavbar />
          <MobileNavbar />
        </div>
      </nav>
    </header>
  );
};
