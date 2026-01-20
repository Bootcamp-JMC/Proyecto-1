import { ColoredButton } from "../../ui/ColoredButton"
import { Hamburger } from "./Hamburger"



export const MenuHeader = () => {


  return (
    <>  
        <header>

        <nav className="fixed top-0 left-0 right-0 border-b border-gray-200 h-20.25">
          
          <div className=" px-[6%]  flex items-center h-full w-full justify-between">

            <div className="flex items-center gap-4">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-purple-500"
                >
                  <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
                </svg>

                <h1 className="text-[25px] font-bold bg-linear-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                  AI Academy
                </h1>
            </div>

            <div className="hidden lg:flex items-center gap-10 text-xl">     

                  <a href="" className="text-gray-700 hover:text-purple-600">Curriculum</a>
                  <a href="" className="text-gray-700 hover:text-purple-600">Success Stories</a>
                  <a href="" className="text-gray-700 hover:text-purple-600">Pricing</a>
                  <a href="" className="text-gray-700 hover:text-purple-600">About</a>
                  
                  <ColoredButton name="Apply Now" />
            </div>

            <Hamburger></Hamburger>
            

          </div>
        </nav>


      </header>
    </>
  )
}

