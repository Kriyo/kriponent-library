import { primary, neutral } from "./colors";
import { primaryFont, secondaryFont } from "./typography";

export const defaultTheme = {
  primaryColor: primary[100],
  primaryColorHover: primary[200],
  primaryColorActive: primary[100],
  textColorOnPrimary: neutral[100],
  textColor: neutral[600],
  textColorInverted: neutral[100],
  primaryFont,
  secondaryFont,
};
