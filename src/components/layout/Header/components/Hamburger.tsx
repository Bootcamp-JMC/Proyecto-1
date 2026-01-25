import { useState } from "react";
import { Menu, X } from "lucide-react";
import { HeaderLink } from "./HeaderLink";

export const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <button className="rounded-xl md:hidden" onClick={toggleMenu}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 flex w-full flex-col gap-4 px-4 py-4.25 backdrop-blur-lg">
          <HeaderLink linkText="Curriculum" />
          <HeaderLink linkText="Success Stories" />
          <HeaderLink linkText="Pricing" />
          <HeaderLink linkText="About" />
          <button
            className="rounded-lg bg-violet-600 px-10 py-2 text-white"
            onClick={toggleMenu}
          >
            Apply Now
          </button>
        </div>
      )}
    </>
  );
};
