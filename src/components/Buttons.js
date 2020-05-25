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
  warning: ({ props }) => `
    background-color: ${props.theme.status.warningColor};
    color: ${props.theme.textColorInverted};

    &:hover, &:focus {
      background-color: ${props.theme.status.warningColorHover};
      outline: 2px solid ${props.theme.status.warningColorHover};
    }

    &:active {
      background-color: ${props.theme.status.warningColorActive};
    }
  `,
  warningSecondary: ({ props }) => `
    background: none;
    border-color: ${props.theme.status.warningColor};

    &:hover, &:focus { {
      background: none;
      color: ${props.theme.primaryColor};
      outline: 2px solid ${props.theme.status.warningColorHover};
    }
  `,
  success: ({ props }) => `
    background-color: ${props.theme.status.successColor};

    &:hover, &:focus {
      color: ${props.theme.textColorInverted};
      background-color: ${props.theme.status.successColorHover};
    }
    &:active: {
      background-color: ${props.theme.status.successColorActive};
    }
  `,
  error: ({ props }) => `
    background-color: ${props.theme.status.errorColor};
    color: ${props.theme.textColorInverted};

    &:hover, &:focus {
      color: ${props.theme.textColorInverted};
      background-color: ${props.theme.status.errorColorHover};
    }
    &:active: {
      background-color: ${props.theme.status.errorColorActive};
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
    box-shadow: ${(props) => props.theme.defaultShadow};
  }

  &:focus {
    border: none;
    outline: 1px solid ${(props) => props.theme.primaryColorFocus};
    outline-offset: 2px;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.textColorOnPrimary};

  &:hover {
    background-color: ${(props) => props.theme.primaryColorHover};
    color: ${(props) => props.theme.textColor};
  }

  &:disabled {
    color: ${(props) => props.theme.textOnDisabled};
    background-color: ${(props) => props.theme.disabled};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
  background-color: ${(props) => props.theme.textColorOnPrimary};
  border: 1px solid ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.primaryColor};

  &:hover {
    background-color: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.textColorOnPrimary};
  }

  &:disabled {
    color: ${(props) => props.theme.textOnDisabled};
    background: none;
    border: 1px solid ${(props) => props.theme.disabled};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
  background-color: ${(props) => props.theme.textColorOnPrimary};
  color: ${(props) => props.theme.primaryColor};

  &:hover {
    background-color: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.textColorOnPrimary};
  }

  &:disabled {
    color: ${(props) => props.theme.textOnDisabled};
    background: none;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export default PrimaryButton;
