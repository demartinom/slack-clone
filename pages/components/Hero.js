import React from "react";
import { HeroStyled, HeroText, VideoContainer } from "../../styles/Hero.styled";
import { PurpleBackButton } from "../../styles/SharedStyles.styled";

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
        <PurpleBackButton>TRY FOR FREE</PurpleBackButton>
      </HeroText>
      <VideoContainer>
        <video loop autoPlay muted src="/assets/videos/teamwork.mp4"></video>
      </VideoContainer>
    </HeroStyled>
  );
}
