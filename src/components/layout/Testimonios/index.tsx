import { TestimoniosTitle } from "./components/TestimoniosTitle";
import { TestimoniosDescription } from "./components/TestimoniosDescription";
import { TestimoniosGrid } from "./components/gridComponents/TestimoniosGrid";
import { TESTIMONIOS_GRID_LIST } from "./data/TESTIMONIOS_GRID_LIST";

import { Ref } from "react";

interface SuccessStoriesProps {
  successStoriesRef: Ref<HTMLDivElement>;
}

export const Testimonios = ({ successStoriesRef }: SuccessStoriesProps) => {
  return (
    <div
      className="container mx-auto mt-23.75 mb-50 max-w-7xl px-4 text-center sm:px-6 md:px-8 lg:px-16"
      ref={successStoriesRef}
    >
      <TestimoniosTitle />
      <TestimoniosDescription />
      <TestimoniosGrid testimoniosList={TESTIMONIOS_GRID_LIST} />
    </div>
  );
};
