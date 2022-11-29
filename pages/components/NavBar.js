import React from "react";
import { NavBarStyled, Navigation } from "../../styles/NavBar.styled";
import logo from "../../public/assets/logo.svg";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
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
    </NavBarStyled>
  );
}
