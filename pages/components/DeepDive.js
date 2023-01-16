import React from "react";
import {
  CardsContainer,
  DeepDiveStyled,
  ImageContainer,
  LinkText,
} from "../../styles/DeepDive.styled";
import diveArray from "../../public/arrays/diveArray";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { Card } from "../../styles/DeepDive.styled";
import Link from "next/link";

export default function DeepDive() {
  const diveMap = diveArray.map((card) =>
    card.purple ? (
      <Card purple key={card.subject}>
        <Link href={card.link}>
          <h3>{card.subject}</h3>
          <h1>{card.title}</h1>
          <ImageContainer purple>
            <Image src={card.picture} alt="card image" fill></Image>
          </ImageContainer>
          <LinkText purple>
            <h3>{card.linkText}</h3>
            <BsArrowRight />
          </LinkText>
        </Link>
      </Card>
    ) : (
      <Card key={card.subject}>
        <Link href={card.link}>
          <ImageContainer>
            <Image src={card.picture} alt="card image" fill></Image>
          </ImageContainer>
          <h3>{card.subject}</h3>
          <h1>{card.title}</h1>
          <LinkText>
            <h3>{card.linkText}</h3>
            <BsArrowRight />
          </LinkText>
        </Link>
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
