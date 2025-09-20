export interface ColorSwatch {
  name: string;
  hexColor: string;
  description?: string;
}

export interface ColorSection {
  title:
    | "Primary Colours"
    | "Secondary & Accent Colors"
    | "UI Component Colors"
    | "Utility & Form Colors"
    | "Status & Feedback Colors";
  swatches: ColorSwatch[];
}

export interface TypographtStyle {
  name: string;
  fontFamily: string;
  fontSize: string;
  fontWeight: string;
  lineHeight: string;
  letterSpacing?: string;
  description?: string;
}

export interface TypographtSection {
  title: string;
  style: TypographtStyle[];
}

export interface styleGuide {
  theme: string;
  description: string;
  colorSection: [
    ColorSection,
    ColorSection,
    ColorSection,
    ColorSection,
    ColorSection,
  ];
  typographtSection: [TypographtSection, TypographtSection, TypographtSection];
}
