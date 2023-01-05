import React from "react";
import {
  ButtonContainer,
  HeroStyled,
  HeroText,
  VideoContainer,
} from "../../styles/Hero.styled";
import { Button, PurpleBackButton } from "../../styles/SharedStyles.styled";

export default function Hero() {
  return (
    <HeroStyled>
      <HeroText>
        <h1>
          Great teamwork starts with a <span>digital HQ</span>
        </h1>
        <p>
          With all your people, tools and communication in one place, you can
          work faster and more flexibly than ever before.
        </p>
        <ButtonContainer>
          <PurpleBackButton>SIGN UP WITH EMAIL</PurpleBackButton>
          <Button>SIGN UP WITH GOOGLE</Button>
        </ButtonContainer>
        <p>
          <span>Slack is free to try</span> for as long as you&#39;d like
        </p>
      </HeroText>
      <VideoContainer>
        <video
          loop
          autoPlay
          playsInline
          muted
          src="/assets/videos/teamwork.mp4"
        ></video>
      </VideoContainer>
    </HeroStyled>
  );
}
