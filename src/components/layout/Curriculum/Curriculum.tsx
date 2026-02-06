import { CurriculumGrid } from "./Components/CurriculumGrid/CurriculumGrid";
import { CurriculumButton } from "./Components/CurriculumButton";
import { CurriculumTitle } from "./Components/CurriculumTitle";
import { CurriculumDescription } from "./Components/CurriculumDescription";
import { CURRICULUM_CARD_LIST } from "./Data/CURRICULUM_CARD_LIST";

export const Curriculum = () => {
  return (
    <>
      <div className="bg-linear-to-br from-purple-50 to-white py-40">
        <div className="container mx-auto text-center">
          <CurriculumTitle />
          <CurriculumDescription />
          <div className="mx-auto mt-16 grid max-w-7xl gap-8 md:px-6 lg:grid-cols-2 lg:px-8 xl:px-16">
            <CurriculumGrid cards={CURRICULUM_CARD_LIST} />
          </div>

          <div className="mt-12">
            <CurriculumButton />
          </div>
        </div>
      </div>
    </>
  );
};
