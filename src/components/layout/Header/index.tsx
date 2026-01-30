import { MobileNavbar } from "./components/MobileNavbar";
import { Logo } from "../../ui/Logo";
import { DesktopNavbar } from "./components/DesktopNavbar";

export const Header = () => {
  return (
    <header>
      <nav className="relative top-0 right-0 left-0 h-16.25 border-b border-gray-200">
        <div className="mx-auto flex h-full w-full items-center justify-between md:container md:px-2 lg:px-4">
          <div className="sm:pl-17.75 md:pl-4">
            <Logo />
          </div>
          <DesktopNavbar />
          <MobileNavbar />
        </div>
      </nav>
    </header>
  );
};
