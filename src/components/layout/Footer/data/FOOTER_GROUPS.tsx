export interface FooterGroup {
  id: number;
  title: string;
  items: FooterGroupItem[];
}

export interface FooterGroupItem {
  id: number;
  text: string;
}

export const FOOTER_GROUPS: FooterGroup[] = [
  {
    id: 1,
    title: "Programs",
    items: [
      { id: 1, text: "Full-Time Bootcamp" },
      { id: 2, text: "Part-Time Course" },
      { id: 3, text: "Corporate Training" },
      { id: 4, text: "Free Workshops" },
    ],
  },
  {
    id: 2,
    title: "Resources",
    items: [
      { id: 1, text: "Blog" },
      { id: 2, text: "Career Guide" },
      { id: 3, text: "Student Portal" },
      { id: 4, text: "Alumni Network" },
    ],
  },
  {
    id: 3,
    title: "Company",
    items: [
      { id: 1, text: "About Us" },
      { id: 2, text: "Careers" },
      { id: 3, text: "Contact" },
      { id: 4, text: "Press Kit" },
    ],
  },
];
