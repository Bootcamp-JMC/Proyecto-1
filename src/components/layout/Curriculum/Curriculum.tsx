import { Check } from "lucide-react";

export const Curriculum = () => {
  return (
    <>
      <div className="bg-linear-to-br from-purple-50 to-white py-75.75">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold">Our Curriculum</h2>
            <p className="mt-4 text-xl text-gray-700">
              A comprehensive 12-week journey from fundamentals to advanced AI
            </p>

            <div className="mt-16 grid md:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 shadow-xl">
                <div className="px-8 py-8">
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="flex h-12 w-12 items-center rounded-[10px] bg-purple-600 px-5 text-white">
                        1
                      </div>
                    </div>
                    <div className="flex flex-col justify-between text-left">
                      <p className="text-sm text-purple-500">Weeks 1-3</p>
                      <h3 className="text-lg">
                        Python & Data Science Foundations
                      </h3>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-col gap-3 text-gray-700">
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-purple-600"></Check>
                      <p>Python programming essentials</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-purple-600"></Check>
                      <p>Python programming essentials</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-purple-600"></Check>
                      <p>Python programming essentials</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-purple-600"></Check>
                      <p>Python programming essentials</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-purple-600"></Check>
                      <p>Python programming essentials</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button></button>
          </div>
        </div>
      </div>
    </>
  );
};
