import React from "react";
import {
  TeamsSalesStyled,
  Statistics,
  SingleStat,
  ButtonContainer,
  Testimonial,
  TestimonialText,
  VideoContainer,
  Disclaimer,
} from "../../styles/TeamsSales.styled";
import { ButtonLarge } from "../../styles/SharedStyles.styled";
import Image from "next/image";
import officeEmoji from "../../public/assets/background-emojis/office.png";
import chartEmoji from "../../public/assets/background-emojis/chart.png";
import lockEmoji from "../../public/assets/background-emojis/lock.png";
import womanEmoji from "../../public/assets/background-emojis/woman.png";
import skylineEmoji from "../../public/assets/background-emojis/skyline.png";
import handshakeEmoji from "../../public/assets/background-emojis/handshake.png";
import playButton from "../../public/assets/playButton.svg";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function TeamsSales() {
  return (
    <TeamsSalesStyled>
      <h1>Teams large and small rely on Slack</h1>
      <h3>
        Slack securely scales up to support collaboration at the world’s biggest
        companies.
      </h3>
      <ButtonContainer>
        <ButtonLarge primary>MEET SLACK FOR ENTERPRISE</ButtonLarge>
        <ButtonLarge>TALK TO SALES</ButtonLarge>
      </ButtonContainer>
      <Statistics>
        <SingleStat>
          <h2>85%</h2>
          <p>of users say Slack has improved communication*</p>
        </SingleStat>
        <SingleStat>
          <h2>86%</h2>
          <p>feel their ability to work remotely has improved*</p>
        </SingleStat>
        <SingleStat>
          <h2>88%</h2>
          <p>feel more connected to their teams*</p>
        </SingleStat>
      </Statistics>
      <Image
        src={officeEmoji}
        alt="office"
        style={{
          position: "absolute",
          left: "150px",
          top: "40px",
        }}
      ></Image>
      <Image
        src={chartEmoji}
        alt="chart"
        style={{
          position: "absolute",
          left: "90px",
          top: "160px",
        }}
      ></Image>
      <Image
        src={lockEmoji}
        alt="lock"
        style={{
          position: "absolute",
          left: "190px",
          top: "250px",
        }}
      ></Image>
      <Image
        src={skylineEmoji}
        alt="skyline"
        style={{
          position: "absolute",
          right: "150px",
          top: "40px",
          height: "44px",
          width: "73px",
        }}
      ></Image>
      <Image
        src={handshakeEmoji}
        alt="handshake"
        style={{
          position: "absolute",
          right: "190px",
          top: "160px",
        }}
      ></Image>
      <Image
        src={womanEmoji}
        alt="woman"
        style={{
          position: "absolute",
          right: "90px",
          top: "250px",
        }}
      ></Image>
      <Testimonial>
        <VideoContainer>
          <Image src={playButton} alt="play button"></Image>
          <Link href="https://www.youtube.com/embed/IDrUzXubiiQ">
            <video
              loop
              autoPlay
              playsInline
              muted
              src="/assets/videos/customer.mp4"
            ></video>
          </Link>
        </VideoContainer>
        <TestimonialText>
          <h2>
            “We were able to create a large virtual network of employees that
            can communicate as though they are together. There was a lot of
            disruption in terms of where we worked, but in terms of how we
            worked—very little disruption.”
          </h2>
          <h4>
            Mark Smith
            <br />
            <span>Senior Technical Product Manager, T-Mobile</span>
          </h4>
          <Link href="https://slack.com/customer-stories">
            See our customer stories <BsArrowRight />
          </Link>
        </TestimonialText>
      </Testimonial>
      <Disclaimer>
        * Weighted average. Based on 2,707 survey responses from weekly Slack
        users in the U.S., UK, Australia and Canada with a ± 2% margin of error
        at 95% CI &#40;December 2021&#41;.
      </Disclaimer>
    </TeamsSalesStyled>
  );
}
