export type ProjectCategory = "design" | "development" | "photography";

export type PortfolioProject = {
  id: string;
  title: string;
  briefTag: string;
  category: ProjectCategory;
  year: string;
  description: string;
  gradient: string; // CSS gradient used as thumbnail placeholder
  imageUrl?: string;
  liveUrl?: string;
  codeUrl?: string;
  tags?: string[];
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "ecommerce-shop",
    title: "E-commerce Shop",
    briefTag: "Online Store Website",
    category: "development",
    year: "2025",
    description:
      "A full-featured shopping website with modern UI, product browsing, and responsive layout.",
    gradient:
      "linear-gradient(135deg, rgba(79,70,229,0.35), rgba(99,102,241,0.05))",
    imageUrl: "/projects/ecommerce.png",
    liveUrl: "https://eshop-app-one.vercel.app/",
    codeUrl: "https://github.com/JanAro1/Ecommerce-App",
    tags: ["React", "CSS3", "JavaScript"],
  },
  {
    id: "ias-video-project",
    title: "IAS Video Project",
    briefTag: "Cinematic Video Production",
    category: "photography",
    year: "2025",
    description:
      "A video project focused on storytelling, smooth editing transitions, and visual consistency.",
    gradient:
      "linear-gradient(135deg, rgba(16,185,129,0.28), rgba(59,130,246,0.07))",
    imageUrl: "/projects/IAS.png",
    liveUrl: "https://drive.google.com/file/d/1GVXnoTdMm1cG_UykOeMwJ8TS46NNhINB/view",
    tags: ["DaVinci Resolve", "Color Grading", "Editing"],
  },
  {
    id: "gayuma-mv-parody",
    title: "Gayuma - MV Parody",
    briefTag: "Music Video Parody",
    category: "photography",
    year: "2024",
    description:
      "A creative parody music video with cinematic cuts, visual effects, and engaging pacing.",
    gradient:
      "linear-gradient(135deg, rgba(236,72,153,0.25), rgba(245,158,11,0.08))",
    imageUrl: "/projects/gayuma.png",
    liveUrl: "https://drive.google.com/file/d/1aHLV2O8hKS6SZG_Qda_lFirbZe3d0ulr/view?usp=drive_link",
    tags: ["Music Video", "Cinematic Edit", "Audio Sync"],
  },
  {
    id: "palangga-mv-parody",
    title: "Palangga - MV Parody",
    briefTag: "Music Video Parody",
    category: "photography",
    year: "2024",
    description:
      "A parody MV project highlighting rhythm-based cuts, narrative flow, and post-production polish.",
    gradient:
      "linear-gradient(135deg, rgba(59,130,246,0.25), rgba(99,102,241,0.05))",
    imageUrl: "/projects/palangga.png",
    liveUrl: "https://drive.google.com/file/d/1woXXDWaALLn0jgTYkItIoQ3w4_U6CMQw/view?usp=sharing",
    tags: ["Parody", "Video Editing", "Color Work"],
  },
];

export function getProjectsByCategory(category: "all" | ProjectCategory) {
  if (category === "all") return portfolioProjects;
  return portfolioProjects.filter((p) => p.category === category);
}

