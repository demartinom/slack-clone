import React from "react";
import {
  ButtonContainer,
  HeroStyled,
  HeroText,
  VideoContainer,
  GoogleButton,
} from "../../styles/Hero.styled";
import { PurpleBackButton } from "../../styles/SharedStyles.styled";
import googleLogo from "../../public/assets/google-logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function Hero(props) {
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
          {props.width > 425 && (
            <>
              <Link href="https://slack.com/get-started">
                <PurpleBackButton hero>SIGN UP WITH EMAIL</PurpleBackButton>
              </Link>
              <GoogleButton hero>
                <Image src={googleLogo} alt="google logo"></Image>SIGN UP WITH
                GOOGLE
              </GoogleButton>
            </>
          )}
          {props.width <= 425 && (
            <PurpleBackButton>GET SLACK FOR ANDROID</PurpleBackButton>
          )}
        </ButtonContainer>
        {props.width > 425 && (
          <p>
            <span>Slack is free to try</span> for as long as you&#39;d like
          </p>
        )}
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
