import React from "react";
import { PreFootStyled } from "../../styles/PreFoot.styled";
import { PurpleBackButton } from "../../styles/SharedStyles.styled";
import { PreFootButtons } from "../../styles/PreFoot.styled";

export default function PreFoot() {
  return (
    <PreFootStyled>
      <h1>Welcome to your new digital HQ</h1>
      <PreFootButtons>
        <PurpleBackButton primary>TALK TO SALES</PurpleBackButton>
        <PurpleBackButton>TRY FOR FREE</PurpleBackButton>
      </PreFootButtons>
    </PreFootStyled>
  );
}
