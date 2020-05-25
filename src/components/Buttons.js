import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { defaultTheme, typeScale } from "../utils";

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${typeScale.helperText};
    padding: 8px;
  `,
  large: () => `
    font-size: ${typeScale.h5};
    padding: 16px 24px;
  `,
  warning: () => `
    background-color: ${defaultTheme.status.warningColor};
    color: ${defaultTheme.textColorInverted};

    &:hover, &:focus {
      background-color: ${defaultTheme.status.warningColorHover};
      outline: 2px solid ${defaultTheme.status.warningColorHover};
    }

    &:active {
      background-color: ${defaultTheme.status.warningColorActive};
    }
  `,
  warningSecondary: () => `
    background: none;
    border-color: ${defaultTheme.status.warningColor};

    &:hover, &:focus { {
      background: none;
      color: ${defaultTheme.primaryColor};
      outline: 2px solid ${defaultTheme.status.warningColorHover};
    }
  `,
  success: () => `
    background-color: ${defaultTheme.status.successColor};

    &:hover, &:focus {
      color: ${defaultTheme.textColorInverted};
      background-color: ${defaultTheme.status.successColorHover};
    }
    &:active: {
      background-color: ${defaultTheme.status.successColorActive};
    }
  `,
  error: () => `
    background-color: ${defaultTheme.status.errorColor};
    color: ${defaultTheme.textColorInverted};

    &:hover, &:focus {
      color: ${defaultTheme.textColorInverted};
      background-color: ${defaultTheme.status.errorColorHover};
    }
    &:active: {
      background-color: ${defaultTheme.status.errorColorActive};
    }
  `,
};

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

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
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
    background: none;
    border: 1px solid ${defaultTheme.disabled};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
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
    background: none;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export default PrimaryButton;
