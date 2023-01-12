import React from "react";
import {
  NavBarStyled,
  Navigation,
  ButtonContainer,
} from "../../styles/NavBar.styled";
import logo from "../../public/assets/logo.svg";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { PurpleBackButton } from "../../styles/SharedStyles.styled";
import Link from "next/link";

export default function NavBar() {
  return (
    <NavBarStyled>
      <Navigation>
        <Link href='https://slack.com'>
          <Image src={logo} alt="slack logo"></Image>
        </Link>
        <Link href="">Product</Link>
        <Link href="">Solutions</Link>
        <Link href="">Enterprise</Link>
        <Link href="">Resources</Link>
        <Link href="">Pricing</Link>
      </Navigation>
      <ButtonContainer>
        <AiOutlineSearch />
        <Link href="">Sign In</Link>
        <PurpleBackButton primary>TALK TO SALES</PurpleBackButton>
        <PurpleBackButton>TRY FOR FREE</PurpleBackButton>
      </ButtonContainer>
    </NavBarStyled>
  );
}
