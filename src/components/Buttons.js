import styled from "styled-components";
import { defaultTheme, typeScale } from "../utils";

const Button = styled.button`
  padding: 12px 24px;
  font-size: ${typeScale.paragraph};
  min-width: 100px;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
`;

export const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};
  border: none;
  color: white;
`;

export const SecondaryButton = styled(Button)`
  background-color: ${defaultTheme.textColorOnPrimary};
  border: 1px solid ${defaultTheme.primaryColor};
  color: ${defaultTheme.primaryColor};
`;
export const TertiaryButton = styled(Button)`
  background-color: ${defaultTheme.textColorOnPrimary};
  border: none;
  color: ${defaultTheme.primaryColor};
`;

export default PrimaryButton;
