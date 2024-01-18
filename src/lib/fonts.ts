// lib/fonts.ts
import { Be_Vietnam_Pro, Rubik_Burned, Roboto } from "next/font/google";

const primaryFont = Be_Vietnam_Pro({
  subsets: ["vietnamese"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const secondaryFont = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const testFont = Rubik_Burned({
  subsets: ["latin"],
  weight: ["400"],
});

export const fonts = {
  primaryFont,
  secondaryFont,
  testFont,
};
