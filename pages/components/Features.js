import Image from "next/image";
import React from "react";
import {
  FeaturesStyled,
  Companies,
  Logos,
  FeatureContainer,
  FeaturesText,
} from "../../styles/Features.styled";
import logos from "./logosArray";
import featuresArray from "./featuresArray";
import Link from "next/link";

export default function Features() {
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
          <Link href="">Learn more about {feature.learnMore}</Link>
        </FeaturesText>
      </FeatureContainer>
    ) : (
      <FeatureContainer key={feature.id}>
        <FeaturesText>
          <h1>{feature.title}</h1>
          <p>{feature.body}</p>
          <Link href="">Learn more about {feature.learnMore}</Link>
        </FeaturesText>
        <video loop autoPlay playsInline muted src={feature.video}></video>
      </FeatureContainer>
    )
  );
  return (
    <FeaturesStyled>
      <Companies>
        <p>TRUSTED BY COMPANIES ALL OVER THE WORLD</p>
        <Logos>{companyLogos}</Logos>
      </Companies>
      {featuresList}
    </FeaturesStyled>
  );
}
