export interface Testimonio {
  id: string;
  rating: number;
  text: string;
  author: Author;
}

export interface Author {
  name: string;
  role: string;
  avatar: string;
}

export const TESTIMONIOS_GRID_LIST: Testimonio[] = [
  {
    id: "1",
    rating: 5,
    text: '"This bootcamp completely changed my career trajectory. The hands-on projects and expert mentorship gave me the confidence to land my dream job."',
    author: {
      name: "Sarah Chen",
      role: "ML Engineer at Google",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    },
  },
  {
    id: "2",
    rating: 5,
    text: '"The curriculum is cutting-edge and constantly updated. I went from zero AI knowledge to building production-ready models in just 12 weeks."',
    author: {
      name: "Marcus Johnson",
      role: "AI Researcher at OpenAI",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    },
  },
  {
    id: "3",
    rating: 5,
    text: '"The community and career support are unmatched. I still connect with my cohort regularly, and the career team helped me negotiate a 40% salary increase."',
    author: {
      name: "Priya Patel",
      role: "Data Scientist at Meta",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop",
    },
  },
];
