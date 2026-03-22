export type ProjectCategory = "ML / AI" | "Full Stack" | "NLP" | "Tools"

export type Project = {
  slug: string
  title: string
  shortDescription: string
  fullDescription: string
  tech: string[]
  category: ProjectCategory
  codeUrl: string
  liveUrl?: string
  imageUrl?: string
  features: string[]
}

export const projects: Project[] = [
  {
    slug: "skillbridge-career-path-generator",
    title: "SkillBridge Career Path Generator",
    shortDescription:
      "Full-stack platform that builds personalized learning roadmaps with role-focused resources and guided project tracks.",
    fullDescription:
      "SkillBridge helps learners turn broad career goals into practical weekly learning plans. It combines curated resources, project recommendations, and role-focused interview preparation into one flow so users can move from confusion to execution faster.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    category: "Full Stack",
    liveUrl: "https://skillbridge-project-cew7.onrender.com/",
    codeUrl: "https://github.com/AlapatiAbhinavChowdhary",
    imageUrl: "/projects/skillbridge-ui.svg",
    features: [
      "Personalized learning roadmap generation by target role",
      "Curated resources and project suggestions in one workflow",
      "Interview-oriented preparation structure",
      "End-to-end full-stack implementation",
    ],
  },
  {
    slug: "medicinal-plant-identifier",
    title: "Medicinal Plant Identifier",
    shortDescription:
      "AI-powered app that identifies Indian medicinal plants from leaf images and returns confidence with medicinal context.",
    fullDescription:
      "This project uses deep learning to classify medicinal plant leaves and provide useful context instantly. It combines a TensorFlow model with a Flask API and React frontend to create a simple, practical image-based prediction experience.",
    tech: ["TensorFlow", "Keras", "Flask", "React"],
    category: "ML / AI",
    codeUrl: "https://github.com/AlapatiAbhinavChowdhary/medicinal-plant-identifier",
    imageUrl: "/projects/medicinal-plant-ai.svg",
    features: [
      "Leaf image upload with fast prediction",
      "78-class medicinal plant identification setup",
      "Confidence score and medicinal-use context",
      "Frontend and backend separated for clean deployment",
    ],
  },
  {
    slug: "ecommerce-fraud-detection",
    title: "E-commerce Fraud Detection",
    shortDescription:
      "Production-style ML pipeline for fraud risk scoring with strong recall and explainable model insights.",
    fullDescription:
      "An end-to-end fraud detection system focused on catching high-risk transactions with high recall. The pipeline includes data preparation, imbalance handling with SMOTE, model comparison, evaluation visualizations, and practical prediction scripts for new data.",
    tech: ["Python", "Scikit-learn", "XGBoost", "Pandas"],
    category: "ML / AI",
    codeUrl: "https://github.com/AlapatiAbhinavChowdhary/ecommerce-fraud-detection",
    imageUrl: "/projects/fraud-detection-dashboard.svg",
    features: [
      "94.5% recall-focused fraud detection performance",
      "Model comparison across Logistic, Random Forest, and XGBoost",
      "SMOTE handling for class imbalance",
      "Prediction workflow for unseen transaction data",
    ],
  },
  {
    slug: "california-house-price-prediction",
    title: "California House Price Prediction",
    shortDescription:
      "End-to-end house price prediction workflow with feature engineering, model tuning, and interactive dashboard support.",
    fullDescription:
      "This project predicts California house prices using engineered features, multiple algorithms, and model tuning pipelines. It is structured like a production-ready ML project and includes a Streamlit interface for interactive prediction and analysis.",
    tech: ["Python", "Scikit-learn", "Streamlit", "XGBoost"],
    category: "ML / AI",
    codeUrl: "https://github.com/AlapatiAbhinavChowdhary/House-Price-Prediction",
    imageUrl: "/projects/house-price-prediction.svg",
    features: [
      "Comprehensive feature engineering and preprocessing",
      "Multiple model training with tuning and comparison",
      "Interactive Streamlit dashboard for predictions",
      "Clear evaluation using RMSE, MAE, R2, and MAPE",
    ],
  },
  {
    slug: "fake-social-media-account-detection",
    title: "Fake Social Media Account Detection",
    shortDescription:
      "Classifier that predicts real vs fake social profiles using behavioral and profile-based signals.",
    fullDescription:
      "This project detects suspicious social media profiles using supervised machine learning and a feature-rich dataset. It includes preprocessing, model training, and a Streamlit interface that makes prediction inputs and outputs easy to understand.",
    tech: ["Python", "Gradient Boosting", "Streamlit", "Pandas"],
    category: "ML / AI",
    codeUrl: "https://github.com/AlapatiAbhinavChowdhary/fake-social-media-account-dection",
    imageUrl: "/projects/fake-account-detector.svg",
    features: [
      "Real vs fake profile classification pipeline",
      "Feature engineering from behavioral profile attributes",
      "Streamlit-based prediction interface",
      "Model experimentation with multiple algorithms",
    ],
  },
  {
    slug: "awesome-chocolate-power-bi-report",
    title: "Awesome Chocolate Power BI Report",
    shortDescription:
      "Interactive BI report covering sales, product performance, shipments, and geographic trends.",
    fullDescription:
      "A decision-focused Power BI dashboard for sales and shipment analytics with KPIs, trends, and product-level insights. Built with clean data modeling and DAX measures to support business-friendly reporting.",
    tech: ["Power BI", "DAX", "Data Modeling", "Analytics"],
    category: "Tools",
    codeUrl: "https://github.com/AlapatiAbhinavChowdhary/awesome-chocolate-power-bi-report",
    imageUrl: "/projects/powerbi-dashboard.svg",
    features: [
      "KPI cards for sales, shipments, and profitability",
      "Trend and product-performance analysis",
      "Geography-wise reporting with interactive filters",
      "Business-ready report structure using DAX",
    ],
  },
]

export const featuredProjects = projects.slice(0, 3)

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}
