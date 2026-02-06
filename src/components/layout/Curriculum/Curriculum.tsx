import { CurriculumGrid } from "./Components/CurriculumGrid/CurriculumGrid";
import { CurriculumButton } from "./Components/CurriculumButton";
import { CurriculumTitle } from "./Components/CurriculumTitle";
import { CurriculumDescription } from "./Components/CurriculumDescription";
import { CURRICULUM_CARD_LIST } from "./Data/CURRICULUM_CARD_LIST";

export const Curriculum = () => {
  return (
    <>
      <div className="bg-linear-to-br from-purple-50 to-white py-40">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <CurriculumTitle />
            <CurriculumDescription />
            <div className="mt-16 grid gap-8 md:grid-cols-2">
              <CurriculumGrid cards={CURRICULUM_CARD_LIST} />
            </div>

            <div className="m-12">
              <CurriculumButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
