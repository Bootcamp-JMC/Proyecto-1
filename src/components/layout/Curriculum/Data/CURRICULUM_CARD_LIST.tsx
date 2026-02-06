export interface CurriculumItemData {
  step: number;
  weeks: string;
  title: string;
  topics: string[];
}

export const CURRICULUM_CARD_LIST: CurriculumItemData[] = [
  {
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
