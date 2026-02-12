import { Author } from "../../data/TESTIMONIOS_GRID_LIST";

interface TestimoniosGridCardProps {
  author: Author;
}

export const TestimoniosGridCard = ({ author }: TestimoniosGridCardProps) => {
  return (
    <div className="mt-6 flex items-center gap-4 border-t border-gray-200 pt-6">
      <img
        src={author.avatar}
        alt={author.name}
        className="h-12 w-12 rounded-full object-cover"
      />
      <div className="text-left">
        <p className="font-semibold">{author.name}</p>
        <p className="text-sm text-purple-600">{author.role}</p>
      </div>
    </div>
  );
};
