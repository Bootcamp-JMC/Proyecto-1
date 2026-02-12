import { Star } from "../../../../ui/Star";

interface StarsProps {
  rating: number;
}

export const TestimoniosStars = ({ rating }: StarsProps) => {
  return (
    <div className="flex gap-1">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} />
      ))}
    </div>
  );
};
