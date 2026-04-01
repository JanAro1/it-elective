export type BlogCategory = "video-editing" | "audio" | "design";

export type BlogPost = {
  slug: string;
  title: string;
  date: string; 
  categories: BlogCategory[];
  excerpt: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "cinematic-video-editing",
    title: "Cinematic Video Editing",
    date: "2026-03-12",
    categories: ["video-editing"],
    excerpt:
      "Creating cinematic cuts with pacing, mood, and storytelling techniques.",
    content: [
      "Cinematic editing is more than transitions. It starts with shot selection, sequence rhythm, and emotional timing.",
      "I focus on clean cuts, intentional b-roll placement, and consistent visual flow to keep the viewer engaged.",
      "The goal is to make every edit feel natural while still supporting the story and mood of the project.",
    ],
  },
  {
    slug: "editing-workflow",
    title: "Editing Workflow",
    date: "2026-02-18",
    categories: ["video-editing"],
    excerpt:
      "A structured workflow from importing footage to final export delivery.",
    content: [
      "My workflow starts with organized folders, labeled bins, and timeline prep to avoid confusion later.",
      "I cut rough sequences first, refine timing second, then apply effects and polish at the final stage.",
      "This process keeps projects efficient, repeatable, and easier to revise based on feedback.",
    ],
  },
  {
    slug: "color-grading",
    title: "Color Grading",
    date: "2026-01-30",
    categories: ["video-editing"],
    excerpt:
      "Balancing tone, contrast, and color for a consistent cinematic look.",
    content: [
      "Color grading helps unify shots captured in different lighting conditions and camera settings.",
      "I adjust white balance, skin tones, and contrast carefully to preserve detail and visual consistency.",
      "A good grade supports the story style, whether the target look is natural, dramatic, or stylized.",
    ],
  },
  {
    slug: "audio-mixing",
    title: "Audio Mixing",
    date: "2025-12-04",
    categories: ["audio", "video-editing"],
    excerpt:
      "Improving dialogue clarity, music balance, and sound design impact.",
    content: [
      "Audio can make or break an edit. I start by cleaning dialogue and removing distracting noise.",
      "Then I mix music and effects so they support the message instead of overwhelming it.",
      "Final loudness checks ensure the output sounds balanced across speakers, headphones, and mobile devices.",
    ],
  },
  {
    slug: "ui-designing",
    title: "UI Designing",
    date: "2025-11-14",
    categories: ["design"],
    excerpt:
      "Designing clean user interfaces with strong hierarchy and visual consistency.",
    content: [
      "My UI approach emphasizes spacing, typography, and consistent components for usability.",
      "I design interfaces that are responsive first, then refine details for polish and accessibility.",
      "The result is a clean, modern style that feels intuitive across different screen sizes.",
    ],
  },
  {
    slug: "mastering-davinci-resolve",
    title: "Mastering DaVinci Resolve",
    date: "2025-10-20",
    categories: ["video-editing", "audio"],
    excerpt:
      "Building advanced editing and post-production skills using DaVinci Resolve.",
    content: [
      "DaVinci Resolve combines editing, color, and audio tools in one powerful workflow.",
      "I practice timeline editing, node-based color correction, and Fairlight audio controls.",
      "Mastering these tools helps me deliver high-quality videos with a professional post-production pipeline.",
    ],
  },
];

