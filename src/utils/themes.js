import { defaultShadow, primary, neutral, success, error, warning } from "./colors";
import { primaryFont, secondaryFont } from "./typography";

export const defaultTheme = {
  defaultShadow,
  disabled: neutral[400],
  primaryColor: primary[100],
  primaryColorHover: primary[200],
  primaryColorActive: primary[100],
  primaryColorFocus: primary[100],
  textColorOnPrimary: neutral[100],
  textColor: neutral[600],
  textColorInverted: neutral[100],
  textOnDisabled: neutral[300],
  primaryFont,
  secondaryFont,
  status: {
    warningColor: warning[100],
    warningColorHover: warning[200],
    warningColorActive: warning[300],
    errorColor: error[100],
    errorColorHover: error[200],
    errorColorActive: error[300],
    successColor: success[100],
    successColorHover: success[200],
    successColorActive: success[300],
  },
};
