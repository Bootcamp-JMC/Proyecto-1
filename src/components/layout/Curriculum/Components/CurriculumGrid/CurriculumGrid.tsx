import { CurriculumItemData } from "../../Data/CURRICULUM_CARD_LIST";
import { CurriculumTopics } from "./CurriculumTopics";

interface CardList {
  cards: CurriculumItemData[];
}

export const CurriculumGrid = ({ cards }: CardList) => {
  return cards.map((card) => (
    <div
      className="rounded-2xl border border-gray-200 bg-white shadow-lg hover:shadow-xl"
      key={card.step}
    >
      <div className="px-8 py-8">
        <div className="flex items-center gap-3">
          <div>
            <div className="flex h-12 w-12 items-center rounded-[10px] bg-purple-600 px-5 text-white">
              {card.step}
            </div>
          </div>
          <div className="flex flex-col justify-between text-left">
            <p className="text-sm text-purple-500">{card.weeks}</p>
            <h3 className="text-lg">{card.title}</h3>
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-3 text-gray-700">
          <CurriculumTopics topics={card.topics} />
        </div>
      </div>
    </div>
  ));
};
