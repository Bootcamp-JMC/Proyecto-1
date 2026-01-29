import { CustomButton } from "../../ui/CustomButton";
import { Hamburger } from "./components/Hamburger";
import { CustomLink } from "../../ui/Customlink";
import { Logo } from "./components/Logo";

export const MenuHeader = () => {
  return (
    <header>
      <nav className="relative top-0 right-0 left-0 h-16.25 border-b border-gray-200">
        <div className="md:2-px mx-auto flex h-full w-full items-center justify-between md:container md:px-2 lg:px-4">
          <div className="sm:pl-17.75 md:pl-4">
            <Logo />
          </div>
          <div className="mx-4 hidden items-center gap-8 text-[16px] md:flex">
            <CustomLink linkText="Curriculum" />
            <CustomLink linkText="Success Stories" />
            <CustomLink linkText="Pricing" />
            <CustomLink linkText="About" />

            <CustomButton name="Apply Now" variant="solid" />
          </div>

          <Hamburger />
        </div>
      </nav>
    </header>
  );
};
