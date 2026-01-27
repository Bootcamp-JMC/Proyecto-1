import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Navigation } from "./Navigation";
import { CustomButton } from "../../../ui/CustomButton";

export const MobileNavbar = () => {
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
        <div className="absolute top-[101%] right-0 flex w-full flex-col gap-4 border-b border-gray-200 px-4 py-4.25 backdrop-blur-lg">
          <Navigation />
          <CustomButton
            buttonText="Apply Now"
            variant="solid"
            customWidth="w-full"
          />
        </div>
      )}
    </>
  );
};
