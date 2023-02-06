import Image from "next/image";
import React from "react";
import {
  FeaturesStyled,
  Companies,
  Logos,
  FeatureContainer,
  FeaturesText,
} from "../../styles/Features.styled";
import logos from "../../public/arrays/logosArray";
import featuresArray from "../../public/arrays/featuresArray";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function Features(props) {
  const companyLogos = logos.map((logo) => (
    <Image
      key={logo.name}
      src={logo.image}
      width={logo.width}
      height={logo.height}
      alt={`${logo.name} logo`}
    ></Image>
  ));
  const featuresList = featuresArray.map((feature, index) =>
    index % 2 == 0 ? (
      <FeatureContainer key={feature.id}>
        <video loop autoPlay playsInline muted src={feature.video}></video>
        <FeaturesText>
          <h1>{feature.title}</h1>
          <p>{feature.body}</p>
          <Link href="">
            Learn more about {feature.learnMore} <BsArrowRight />
          </Link>
        </FeaturesText>
      </FeatureContainer>
    ) : (
      <FeatureContainer key={feature.id}>
        <FeaturesText>
          <h1>{feature.title}</h1>
          <p>{feature.body}</p>
          <Link href="">
            Learn more about {feature.learnMore} <BsArrowRight />
          </Link>
        </FeaturesText>
        <video loop autoPlay playsInline muted src={feature.video}></video>
      </FeatureContainer>
    )
  );
  const featuresMobile = featuresArray.map((feature) => (
    <FeatureContainer key={feature.id}>
      <video loop autoPlay playsInline muted src={feature.video}></video>
      <FeaturesText>
        <h1>{feature.title}</h1>
        <p>{feature.body}</p>
        <Link href="">
          Learn more about {feature.learnMore} <BsArrowRight />
        </Link>
      </FeaturesText>
    </FeatureContainer>
  ));
  return (
    <FeaturesStyled>
      <Companies>
        <p>TRUSTED BY COMPANIES ALL OVER THE WORLD</p>
        <Logos>{companyLogos}</Logos>
      </Companies>
      {props.width > 425 && featuresList}
      {props.width <= 425 && featuresMobile}
    </FeaturesStyled>
  );
}
