import { Testimonio } from "../../data/TESTIMONIOS_GRID_LIST";
import { TestimoniosGridCard } from "./TestimoniosGridCard";
import { TestimoniosStars } from "./TestimoniosStars";

interface TestimoniosListProps {
  testimoniosList: Testimonio[];
}

export const TestimoniosGrid = ({ testimoniosList }: TestimoniosListProps) => {
  return (
    <div className="mx-auto mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {testimoniosList.map((testimonio) => (
        <div
          key={testimonio.id}
          className="rounded-2xl border border-purple-100 bg-purple-50 bg-linear-to-br from-purple-50 to-white p-8 hover:shadow-xl"
        >
          <div className="flex-col gap-12">
            <TestimoniosStars rating={testimonio.rating} />
            <p className="mt-4 text-left text-[16px] leading-6.5 text-gray-600">
              {testimonio.text}
            </p>
          </div>
          <TestimoniosGridCard author={testimonio.author} />
        </div>
      ))}
    </div>
  );
};
