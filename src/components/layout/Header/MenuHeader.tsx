import { CustomButton } from "../../ui/CustomButton";
import { Hamburger } from "./components/Hamburger";
import { HeaderLink } from "./components/HeaderLink";
import { Logo } from "./components/Logo";

export const MenuHeader = () => {
  return (
    <header>
      <nav className="relative top-0 right-0 left-0 h-16.25 border-b border-gray-200">
        <div className="flex h-full w-full items-center justify-between px-4 md:px-8.25 lg:px-0">
          <Logo />
          <div className="hidden items-center gap-5 text-[16px] md:flex md:px-2 lg:gap-8 lg:px-16.75">
            <HeaderLink linkText="Curriculum" />
            <HeaderLink linkText="Success Stories" />
            <HeaderLink linkText="Pricing" />
            <HeaderLink linkText="About" />

            <CustomButton name="Apply Now" variant="solid" />
          </div>

          <Hamburger />
        </div>
      </nav>
    </header>
  );
};
