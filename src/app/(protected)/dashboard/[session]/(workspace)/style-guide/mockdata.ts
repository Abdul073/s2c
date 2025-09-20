export type ColorSwatchItem = {
  name: string;
  hecColor: string;
  description?: string;
};

export type ColorSection = {
  title: string;
  swatches: ColorSwatchItem[];
};

export type StyleGuide = {
  colorSections: ColorSection[];
};

export const mockStyleGuide: StyleGuide = {
  colorSections: [
    {
      title: "Primary Colours",
      swatches: [
        {
          name: "Lavender Dream",
          hecColor: "#E8D5F2",
          description: "Soft purple for headers and primary elements",
        },
        {
          name: "Cloud White",
          hecColor: "#FEFEFE",
          description: "Pure white background with subtle warmth",
        },
        {
          name: "Mint Cream",
          hecColor: "#F0FDF4",
          description: "Gentle mint for light backgrounds and accents",
        },
        {
          name: "Twilight Violet",
          hecColor: "#C7A0E8",
          description: "Deeper purple for primary buttons and focus states",
        },
        {
          name: "Seafoam",
          hecColor: "#D1FAE5",
          description: "Fresh teal-green for subtle primary fills",
        },
        {
          name: "Iris Glow",
          hecColor: "#DDD6FE",
          description: "Light indigo for soft headers and cards",
        },
      ],
    },
    {
      title: "Secondary & Accent Colors",
      swatches: [
        {
          name: "Peach Blush",
          hecColor: "#FFE5D9",
          description: "Warm accent for highlights and badges",
        },
        {
          name: "Sky Haze",
          hecColor: "#E0F2FE",
          description: "Soft blue for info states and links",
        },
        {
          name: "Lilac Mist",
          hecColor: "#F3E8FF",
          description: "Muted purple for subtle emphasis",
        },
        {
          name: "Moss Tint",
          hecColor: "#DCFCE7",
          description: "Natural green for success and confirmations",
        },
        {
          name: "Sunbeam",
          hecColor: "#FEF9C3",
          description: "Gentle yellow for warnings and accents",
        },
        {
          name: "Coral Pop",
          hecColor: "#FFD6D1",
          description: "Playful coral for CTA hovers and tags",
        },
        {
          name: "Aqua Whisper",
          hecColor: "#CCFBF1",
          description: "Minty aqua for supportive accents",
        },
      ],
    },
    {
      title: "Neutrals",
      swatches: [
        {
          name: "Ink",
          hecColor: "#0F172A",
          description: "Primary text and high-contrast elements",
        },
        {
          name: "Slate",
          hecColor: "#334155",
          description: "Muted foreground and secondary text",
        },
        {
          name: "Ash",
          hecColor: "#CBD5E1",
          description: "Borders and subtle separators",
        },
        {
          name: "Fog",
          hecColor: "#E5E7EB",
          description: "Soft surfaces and backgrounds",
        },
        {
          name: "Paper",
          hecColor: "#F8FAFC",
          description: "Base background for pages and containers",
        },
      ],
    },
  ],
};

export default mockStyleGuide;
