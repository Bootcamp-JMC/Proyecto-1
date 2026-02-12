import { ArrowRight } from "lucide-react";

export const CallToActionButtons = () => {
  return (
    <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
      <button className="flex h-14 w-42.5 items-center justify-center gap-2 rounded-[14px] bg-white text-purple-600">
        Apply Now <ArrowRight size={20} className="mt-px" />
      </button>
      <button className="flex h-14.75 w-62 items-center justify-center gap-2 rounded-[14px] border-2 border-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-calendar mt-px h-5 w-5"
          aria-hidden="true"
        >
          <path d="M8 2v4"></path>
          <path d="M16 2v4"></path>
          <rect width="18" height="18" x="3" y="4" rx="2"></rect>
          <path d="M3 10h18"></path>
        </svg>
        Schedule Info Session
      </button>
    </div>
  );
};
