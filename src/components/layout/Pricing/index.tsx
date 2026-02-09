import { Check } from "lucide-react";

export const Pricing = () => {
  return (
    <div className="bg-linear-to-br from-purple-900 via-purple-800 to-violet-900 text-white">
      <div className="container mx-auto px-4 pt-23.75 text-center">
        <h3 className="text-4xl font-bold">Investment in Your Future</h3>
        <p className="mt-4 px-6 text-xl text-purple-200">
          Flexible payment options and scholarship opportunities available
        </p>
      </div>
      <div className="mt-12.5 grid-cols-1 px-1.75 text-left text-black">
        <div className="flex-col rounded-2xl bg-white px-8.5 py-8">
          {/* <button>Most Popular</button> */}
          <h3 className="text-[25px] font-bold">Full-Time Immersive</h3>
          <p className="mt-1.25 text-[17px] text-gray-600">Mon-Fri, 9am-5pm</p>
          <h2 className="mt-6.75 text-[50px] leading-none font-bold">
            $14,999
          </h2>
          <p className="mt-2 text-[17px] text-gray-600"> 12 weeks program</p>

          <div className="mt-6 flex-col bg-red-200">
            <div className="mt-4.25 flex items-center gap-3.25">
              <Check className="text-purple-600" size={20} />
              <p className="text-[17px] text-gray-600">
                Live daily instruction
              </p>
            </div>
            <div className="mt-4.25 flex items-center gap-3.25">
              <Check className="text-purple-600" size={20} />
              <p className="text-[17px] text-gray-600">
                1-on-1 mentor sessions
              </p>
            </div>
            <div className="mt-4.25 flex items-center gap-3.25">
              <Check className="text-purple-600" size={20} />
              <p className="text-[17px] text-gray-600">
                Live daily instruction
              </p>
            </div>
            <div className="mt-4.25 flex items-center gap-3.25">
              <Check className="text-purple-600" size={20} />
              <p className="text-[17px] text-gray-600">
                Live daily instruction
              </p>
            </div>
            <div className="mt-4.25 flex items-center gap-3.25">
              <Check className="text-purple-600" size={20} />
              <p className="text-[17px] text-gray-600">
                Live daily instruction
              </p>
            </div>
            <div className="mt-4.25 flex items-center gap-3.25">
              <Check className="text-purple-600" size={20} />
              <p className="text-[17px] text-gray-600">
                Live daily instruction
              </p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      a
    </div>
  );
};
