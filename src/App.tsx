import "./style.css"

const App = () => {
  return (
    <>
      {/* Header */}
        <header className="bg-white text-black p-2 fixed top-0 left-0 right-0 z-50 text-xl border-b border-gray-300 flex" >

      <div className="flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-12 h-12 text-purple-500"
          >
          
            <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
          </svg>

          <h2 className="text-2xl text-[#7C3AED] font-bold px-2"> AI Academy </h2>
        </div>

          <div className="hidden md:flex items-center gap-8">
            
            <div className="ml-auto flex gap-9"> 
              <a href="">Curriculum</a>
              <a href="">Success Stories</a>
              <a href="">Pricing</a>
              <a href="">About</a>
            </div>
            <button className="bg-[#7C3AED] text-white rounded-lg px-8 py-3 hover:bg-purple-700 mr-20 transition-all"> 
              Apply Now 
            </button>

          </div>
      </div>

        </header>

      {/* Hero */}


      
      {/* Features */}


      {/* Curriculum */}



    </>
  );
};

export default App;
