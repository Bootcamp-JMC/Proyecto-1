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
        <div className="absolute top-full right-0 w-full border-y border-gray-200 bg-white/97 p-4 backdrop-blur-lg">
          <div className="flex flex-col gap-4">
            <Navigation NavigationType="Mobile" />
            <CustomButton
              buttonText="Apply Now"
              variant="solid"
              customWidth="w-full"
            />
          </div>
        </div>
      )}
    </>
  );
};
