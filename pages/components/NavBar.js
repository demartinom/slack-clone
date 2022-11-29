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

export default function NavBar() {
  return (
    <NavBarStyled>
      <Navigation>
      <Image src={logo} alt="slack logo"></Image>
        <li>Product</li>
        <li>Solutions</li>
        <li>Enterprise</li>
        <li>Resources</li>
        <li>Pricing</li>
      </Navigation>
      <ButtonContainer>
      <AiOutlineSearch />
      <h3>Sign In</h3>
        <PurpleBackButton primary>TALK TO SALES</PurpleBackButton>
        <PurpleBackButton>TRY FOR FREE</PurpleBackButton>
      </ButtonContainer>
    </NavBarStyled>
  );
}
