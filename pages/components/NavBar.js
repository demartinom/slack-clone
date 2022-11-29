import React from "react";
import {
  NavBarStyled,
  Navigation,
  ButtonContainer,
} from "../../styles/NavBar.styled";
import logo from "../../public/assets/logo.svg";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { Button } from "../../styles/SharedStyles.styled";

export default function NavBar() {
  return (
    <NavBarStyled>
      <Image src={logo} alt="slack logo"></Image>
      <Navigation>
        <li>Product</li>
        <li>Solutions</li>
        <li>Enterprise</li>
        <li>Resources</li>
        <li>Pricing</li>
      </Navigation>
      <AiOutlineSearch />
      <h3>Sign In</h3>
      <ButtonContainer>
        
      </ButtonContainer>
    </NavBarStyled>
  );
}
