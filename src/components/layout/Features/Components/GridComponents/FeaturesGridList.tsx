export interface FeaturesGridProps {
  title: string;
  text: string;
  icon: any;
  id: string;
}

export interface FeaturesGridListProps {
  featuresList: FeaturesGridProps[];
}
const ICON_CLASS =
  "h-14 w-14  rounded-[14px] bg-purple-100 stroke-current stroke-2 p-[14px] text-purple-600 mb-6 border-purple-500 group-hover:bg-purple-600 group-hover:text-white ";

export const FeaturesGridList: FeaturesGridProps[] = [
  {
    title: "AI Fundamentals",
    text: "Deep dive into neural networks, deep learning, and modern AI architectures",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className={ICON_CLASS}
        aria-hidden="true"
      >
        <path d="M12 18V5" />
        <path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4 0 0 1-3 4" />
        <path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5" />
        <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77" />
        <path d="M18 18a4 4 0 0 0 2-7.464" />
        <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517" />
        <path d="M6 18a4 4 0 0 1-2-7.464" />
        <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77" />
      </svg>
    ),
    id: "1",
  },

  {
    title: "Hands-On Projects",
    text: "Build real-world applications with TensorFlow, PyTorch, and cutting-edge tools",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={ICON_CLASS}
        aria-hidden="true"
      >
        <path d="m16 18 6-6-6-6" />
        <path d="m8 6-6 6 6 6" />
      </svg>
    ),
    id: "2",
  },
  {
    title: "Expert Mentorship",
    text: "Learn from industry veterans working at top tech companies",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className={ICON_CLASS}
        aria-hidden="true"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <path d="M16 3.128a4 4 0 0 1 0 7.744" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <circle cx="9" cy="7" r="4" />
      </svg>
    ),
    id: "3",
  },
  {
    title: "Career Support",
    text: "Resume reviews, interview prep, and direct connections to hiring partners",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className={ICON_CLASS}
        aria-hidden="true"
      >
        <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
        <circle cx="12" cy="8" r="6" />
      </svg>
    ),
    id: "4",
  },
  {
    title: "Flexible Learning",
    text: "Full-time or part-time schedules that fit your lifestyle",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className={ICON_CLASS}
        aria-hidden="true"
      >
        <path d="M12 6v6l4 2" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
    id: "5",
  },
  {
    title: "Lifetime Access",
    text: "Continuous updates and access to our evolving curriculum and community",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className={ICON_CLASS}
        aria-hidden="true"
      >
        <path d="M16 7h6v6" />
        <path d="m22 7-8.5 8.5-5-5L2 17" />
      </svg>
    ),
    id: "6",
  },
];
