import React from "react";
import styled from "styled-components";
import { typeScale } from "../utils";
import { Illustrations, CloseIcon } from "../assets";
import { PrimaryButton } from "./Buttons";

const ModalWrapper = styled.div`
  width: 800px;
  height: 580px;
  box-shadow: ${(props) => props.theme.modalShadow};
  background-color: ${(props) => props.theme.formElementBackground};
  color: ${(props) => props.theme.textOnFormElementBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const SignUpHeader = styled.h3`
  margin: 25px;
  font-size: ${typeScale.header1};
  font-family: ${(props) => props.theme.secondaryFont};
`;

const SignUpText = styled.p`
  font-size: ${typeScale.paragraph};
  max-width: 70%;
  text-align: center;
`;

const CloseModalButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  top: 40px;
  right: 40px;
  height: 36px;
  width: 36px;
  padding: 0;
`;

export const SignUpModal = () => {
  return (
    <ModalWrapper>
      <img src={Illustrations.SignUp} alt='sign up img' aria-hidden='true' />
      <SignUpHeader>Sign Up!</SignUpHeader>
      <SignUpText>Sign up today to get access to cool things!</SignUpText>
      <PrimaryButton>Sign Up</PrimaryButton>
      <CloseModalButton aria-label='close modal'>
        <CloseIcon />
      </CloseModalButton>
    </ModalWrapper>
  );
};
