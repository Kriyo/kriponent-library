import React from "react";
import styled from "styled-components";

const CloseIconWrapper = styled.svg`
  width: 100%;
  height: 100%;
`;

export const CloseIcon = () => {
  return (
    <CloseIconWrapper aria-hidden='true'>
      <path
        d='M25.3333 8.54666L23.4533 6.66666L16 14.12L8.54666 6.66666L6.66666 8.54666L14.12 16L6.66666 23.4533L8.54666 25.3333L16 17.88L23.4533 25.3333L25.3333 23.4533L17.88 16L25.3333 8.54666Z'
        fill='black'
      />
    </CloseIconWrapper>
  );
};
