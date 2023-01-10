import React from "react";
import {
  CardsContainer,
  DeepDiveStyled,
  ImageContainer,
  LinkContainer,
} from "../../styles/DeepDive.styled";
import diveArray from "./diveArray";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { Card } from "../../styles/DeepDive.styled";
import Link from "next/link";

export default function DeepDive() {
  const diveMap = diveArray.map((card) =>
    card.purple ? (
      <Card purple key={card.subject}>
        <h3>{card.subject}</h3>
        <h1>{card.title}</h1>
        <ImageContainer purple>
          <Image src={card.picture} alt="card image" fill></Image>
        </ImageContainer>
        <Link href="">
          <h3>{card.linkText}</h3>
          <BsArrowRight />
        </Link>
      </Card>
    ) : (
      <Card key={card.subject}>
        <ImageContainer>
          <Image src={card.picture} alt="card image" fill></Image>
        </ImageContainer>
        <h3>{card.subject}</h3>
        <h1>{card.title}</h1>
        <LinkContainer>
          <Link href="">
            <h3>{card.linkText}</h3>
          </Link>
          <BsArrowRight />
        </LinkContainer>
      </Card>
    )
  );
  return (
    <DeepDiveStyled>
      <h1>Take a deeper dive into a new way to work</h1>
      <CardsContainer>{diveMap}</CardsContainer>
    </DeepDiveStyled>
  );
}
