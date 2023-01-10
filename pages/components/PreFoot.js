import React from "react";
import {
  PreFootButtonsContainer,
  PreFootStyled,
} from "../../styles/PreFoot.styled";
import { PurpleBackButton } from "../../styles/SharedStyles.styled";
import { PreFootButtons } from "../../styles/PreFoot.styled";

export default function PreFoot() {
  return (
    <PreFootStyled>
      <h1>Welcome to your new digital HQ</h1>
      <PreFootButtonsContainer>
        <PreFootButtons>TRY FOR FREE</PreFootButtons>
        <PreFootButtons primary>TALK TO SALES</PreFootButtons>
      </PreFootButtonsContainer>
    </PreFootStyled>
  );
}
