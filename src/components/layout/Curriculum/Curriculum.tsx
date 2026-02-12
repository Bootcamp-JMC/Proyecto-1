import { CurriculumGrid } from "./components/CurriculumGrid/CurriculumGrid";
import { CurriculumTitle } from "./components/CurriculumTitle";
import { CurriculumDescription } from "./components/CurriculumDescription";
import { CURRICULUM_CARD_LIST } from "./data/CURRICULUM_CARD_LIST";
import { CustomButton } from "../../ui/CustomButton";

export const Curriculum = () => {
  return (
    <div className="bg-linear-to-br from-purple-50 to-white py-40">
      <div className="container mx-auto text-center">
        <CurriculumTitle />
        <CurriculumDescription />
        <div className="mx-auto mt-16 grid max-w-7xl gap-8 md:px-6 lg:grid-cols-2 lg:px-8 xl:px-16">
          <CurriculumGrid cards={CURRICULUM_CARD_LIST} />
        </div>

        <div className="mt-12">
          <CustomButton
            buttonText="Download Full Syllabus"
            variant="solid"
            customWidth="w-[226px]"
            customHeight="h-14"
            customRounded="rounded-[14px]"
          />
        </div>
      </div>
    </div>
  );
};
