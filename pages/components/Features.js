import Image from "next/image";
import React from "react";
import { FeaturesStyled, Companies, Logos } from "../../styles/Features.styled";
import logos from "./logosArray";

export default function Features() {
  const companyLogos = logos.map((logo) => (
    <Image
      key={logo.name}
      src={logo.image}
      fill
      alt="company logo"
    ></Image>
  ));
  return (
    <FeaturesStyled>
      <Companies>
        <p>TRUSTED BY COMPANIES ALL OVER THE WORLD</p>
        <Logos>{companyLogos}</Logos>
      </Companies>
    </FeaturesStyled>
  );
}
