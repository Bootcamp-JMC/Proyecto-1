export interface CurriculumItemData {
  id: string;
  step: number;
  weeks: string;
  title: string;
  topics: string[];
}

export const CURRICULUM_CARD_LIST: CurriculumItemData[] = [
  {
    id: "1",
    step: 1,
    weeks: "Weeks 1-3",
    title: "Python & Data Science Foundations",
    topics: [
      "Python programming essentials",
      "NumPy, Pandas, and data manipulation",
      "Data visualization with Matplotlib & Seaborn",
      "Statistical analysis and probability",
    ],
  },
  {
    id: "2",
    step: 2,
    weeks: "Weeks 4-6",
    title: "Machine Learning Fundamentals",
    topics: [
      "Supervised and unsupervised learning",
      "Regression, classification, and clustering",
      "Model evaluation and optimization",
      "Scikit-learn and ML pipelines",
    ],
  },
  {
    id: "3",
    step: 3,
    weeks: "Weeks 7-9",
    title: "Deep Learning & Neural Networks",
    topics: [
      "TensorFlow and PyTorch frameworks",
      "CNNs for computer vision",
      "RNNs and transformers for NLP",
      "Transfer learning and fine-tuning",
    ],
  },
  {
    id: "4",
    step: 4,
    weeks: "Weeks 10-12",
    title: "Advanced AI & Capstone",
    topics: [
      "Large Language Models (LLMs)",
      "Generative AI and GPT applications",
      "MLOps and model deployment",
      "Final capstone project presentation",
    ],
  },
];
