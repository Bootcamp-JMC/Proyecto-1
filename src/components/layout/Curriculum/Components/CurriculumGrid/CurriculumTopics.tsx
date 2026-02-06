import { Check } from "lucide-react";

interface CurriculumTopicsProps {
  topics: string[];
}

export const CurriculumTopics = ({ topics }: CurriculumTopicsProps) => {
  return topics.map((topic) => (
    <div key={topic} className="flex gap-3">
      <Check className="mt-0.5 flex h-5 w-5 shrink-0 text-purple-600"></Check>
      <p className="text-left">{topic} </p>
    </div>
  ));
};
