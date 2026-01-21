import { useState } from "react";

import { Menu } from "lucide-react";

export const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <button className="p- rounded-xl lg:hidden" onClick={toggleMenu}>
        <Menu size={24} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-gray-100 text-2xl text-purple-500 backdrop-blur-sm">
          <a href="#">Curriculum</a>
          <a href="#">Success Stories</a>
          <a href="#">Pricing</a>
          <a href="#">About</a>
          <button
            className="rounded-lg border-2 border-purple-400 bg-white px-6 py-2 text-black"
            onClick={toggleMenu}
          >
            Cerrar
          </button>
        </div>
      )}
    </>
  );
};
