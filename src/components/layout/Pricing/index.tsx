import { Check } from "lucide-react";
import { CustomButton } from "../../ui/CustomButton";

export const Pricing = () => {
  return (
    <div className="bg-linear-to-br from-purple-900 via-purple-800 to-violet-900 text-white">
      <div className="container mx-auto px-4 pt-23.75 text-center">
        <h3 className="text-4xl font-bold">Investment in Your Future</h3>
        <p className="mt-4 text-xl text-purple-200">
          Flexible payment options and scholarship opportunities available
        </p>
      </div>
      <div className="container mx-auto text-center">
        <div className="mx-auto mt-12.25 grid max-w-5xl grid-cols-1 gap-2.5 px-1.75 text-left text-black md:grid-cols-2 md:px-4 lg:px-13.25">
          <div className="flex-col rounded-[17px] bg-white px-8.5 py-8">
            <button className="mt-px rounded-2xl bg-purple-600 px-4 py-0.75 text-[15px] text-white">
              Most Popular
            </button>
            <h3 className="mt-4 text-[25px] font-bold">Full-Time Immersive</h3>
            <p className="mt-1.5 text-[17px] text-gray-600">Mon-Fri, 9am-5pm</p>
            <h2 className="mt-6.5 text-[50px] leading-none font-bold">
              $14,999
            </h2>
            <p className="mt-2 text-[17px] text-gray-600"> 12 weeks program</p>

            <div className="mt-6.25 flex flex-col gap-4.25">
              <div className="flex items-center gap-3.25">
                <Check className="text-purple-600" size={20} />
                <p className="text-[17px] text-gray-600">
                  Live daily instruction
                </p>
              </div>

              <div className="flex items-center gap-3.25">
                <Check className="text-purple-600" size={20} />
                <p className="text-[17px] text-gray-600">
                  1-on-1 mentor sessions
                </p>
              </div>

              <div className="flex items-center gap-3.25">
                <Check className="text-purple-600" size={20} />
                <p className="text-[17px] text-gray-600">
                  Career coaching & placement
                </p>
              </div>

              <div className="flex items-center gap-3.25">
                <Check className="text-purple-600" size={20} />
                <p className="text-[17px] text-gray-600">
                  Lifetime curriculum access
                </p>
              </div>

              <div className="flex items-center gap-3.25">
                <Check className="text-purple-600" size={20} />
                <p className="text-[17px] text-gray-600">
                  Alumni network access
                </p>
              </div>

              <div className="flex items-center gap-3.25">
                <Check className="text-purple-600" size={20} />
                <p className="text-[17px] text-gray-600">
                  Job guarantee program
                </p>
              </div>
            </div>
            <div className="mt-8.25 font-bold">
              <CustomButton
                buttonText="Apply Now"
                variant="solid"
                customWidth="w-full"
                customHeight="h-15"
                customRounded="rounded-[15px]"
              />
            </div>
          </div>
          <div className="mx-2.75 my-3.75 flex-col rounded-2xl border-2 border-purple-700 bg-purple-800/50 px-8 py-7.5 text-white">
            <h3 className="text-[24px] font-bold">Part-Time Flexible</h3>
            <p className="mt-1.5 text-[16px] text-purple-200">
              Evenings & Weekends
            </p>
            <h2 className="mt-6 text-[48px] leading-none font-bold">$12,999</h2>
            <p className="mt-2 text-[16px] text-purple-200">24 weeks program</p>

            <div className="mt-6 flex flex-col gap-4">
              <div className="flex items-center gap-3.25">
                <Check className="text-purple-300" size={20} />
                <p className="text-[16px] text-purple-100">
                  Live evening classes
                </p>
              </div>

              <div className="flex items-center gap-3.25">
                <Check className="text-purple-300" size={20} />
                <p className="text-[16px] text-purple-100">
                  Live evening classes
                </p>
              </div>

              <div className="flex items-center gap-3.25">
                <Check className="text-purple-300" size={20} />
                <p className="text-[16px] text-purple-100">
                  Live evening classes
                </p>
              </div>

              <div className="flex items-center gap-3.25">
                <Check className="text-purple-300" size={20} />
                <p className="text-[16px] text-purple-100">
                  Live evening classes
                </p>
              </div>

              <div className="flex items-center gap-3.25">
                <Check className="text-purple-300" size={20} />
                <p className="text-[16px] text-purple-100">
                  Live evening classes
                </p>
              </div>

              <div className="flex items-center gap-3.25">
                <Check className="text-purple-300" size={20} />
                <p className="text-[16px] text-purple-100">
                  Live evening classes
                </p>
              </div>
            </div>
            <div className="mt-8 font-bold">
              <CustomButton
                buttonText="Apply Now"
                variant="outline"
                customWidth="w-full"
                customHeight="h-14"
                customRounded="rounded-[13px]"
                customTextColor="text-purple-900"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 pt-8.25 pb-20 text-center">
        <div className="flex flex-col text-center">
          <p className="mb-4 text-purple-200">
            🎓 Scholarships available for underrepresented groups in tech
          </p>
          <p className="mb-4 text-purple-200">
            💳 Flexible payment plans and ISA options available
          </p>
        </div>
      </div>
    </div>
  );
};
