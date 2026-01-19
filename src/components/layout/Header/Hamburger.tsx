import { useState } from "react"


export const Hamburger = () => {

    const [isOpen, setIsOpen ] = useState(false);

    function toggleMenu() {
    setIsOpen(!isOpen);
    console.log(!isOpen ? "Abierto" : "Cerrado");
}

    return (
        <>

            <button className="lg:hidden rounded-xl p-3 bg-amber-500" onClick={toggleMenu}>
                Click
            </button>

                    
            {isOpen && (
                <div className="fixed inset-0 bg-gray-100 backdrop-blur-sm z-40 flex flex-col items-center justify-center gap-6 text-purple-500 text-2xl">
                    <a href="#">Curriculum</a>
                    <a href="#">Success Stories</a>
                    <a href="#">Pricing</a>
                    <a href="#">About</a>
                    <button
                        className=" px-6 py-2 bg-white text-black rounded-lg border-2 border-purple-400 "
                        onClick={toggleMenu}
                    >
                        Cerrar
                    </button>
                </div>
            )}
        </>
    )
}

