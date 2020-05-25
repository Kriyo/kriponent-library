import styled from "styled-components";

const primaryColor = "#2E4052";

const Button = styled.button`
  padding: 12px 24px;
  font-size: 1rem;
  min-width: 100px;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
`;

const PrimaryButton = styled(Button)`
  background-color: ${primaryColor};
  border: none;
  color: white;
`;

export default PrimaryButton;
