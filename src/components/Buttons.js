import styled from "styled-components";
import { defaultTheme, typeScale } from "../utils";

const Button = styled.button`
  padding: 12px 24px;
  font-size: ${typeScale.paragraph};
  min-width: 100px;
  border: none;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  transition: background-color 0.25s linear, color 0.25s linear;

  &:hover {
    box-shadow: ${defaultTheme.defaultShadow};
  }

  &:focus {
    border: none;
    outline: 1px solid ${defaultTheme.primaryColorFocus};
    outline-offset: 2px;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};
  color: ${defaultTheme.textColorOnPrimary};

  &:hover {
    background-color: ${defaultTheme.primaryColorHover};
    color: ${defaultTheme.textColor};
  }

  &:disabled {
    color: ${defaultTheme.textOnDisabled};
    background-color: ${defaultTheme.disabled};
  }
`;

export const SecondaryButton = styled(Button)`
  background-color: ${defaultTheme.textColorOnPrimary};
  border: 1px solid ${defaultTheme.primaryColor};
  color: ${defaultTheme.primaryColor};

  &:hover {
    background-color: ${defaultTheme.primaryColor};
    color: ${defaultTheme.textColorOnPrimary};
  }

  &:disabled {
    color: ${defaultTheme.textOnDisabled};
    border: 1px solid ${defaultTheme.disabled};
  }
`;

export const TertiaryButton = styled(Button)`
  background-color: ${defaultTheme.textColorOnPrimary};
  color: ${defaultTheme.primaryColor};

  &:hover {
    background-color: ${defaultTheme.primaryColor};
    color: ${defaultTheme.textColorOnPrimary};
  }

  &:disabled {
    color: ${defaultTheme.textOnDisabled};
  }
`;

export default PrimaryButton;
