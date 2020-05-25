import styled from "styled-components";

const primaryColor = "#2E4052";
const secondaryColor = "#FFF";

const Button = styled.button`
  padding: 12px 24px;
  font-size: 1rem;
  min-width: 100px;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
`;

export const PrimaryButton = styled(Button)`
  background-color: ${primaryColor};
  border: none;
  color: white;
`;

export const SecondaryButton = styled(Button)`
  background-color: ${secondaryColor};
  border: 1px solid ${primaryColor};
  color: ${primaryColor};
`;
export const TertiaryButton = styled(Button)`
  background-color: ${secondaryColor};
  border: none;
  color: ${primaryColor};
`;

export default PrimaryButton;
