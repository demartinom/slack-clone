import React from "react";
import {
  NavBarStyled,
  Navigation,
  ButtonContainer,
  Dropdown,
  ProductList,
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
        <Link href="https://slack.com">
          <Image src={logo} alt="slack logo"></Image>
        </Link>
        <Dropdown>
          Product
          <ProductList>
            <li>Features</li>
            <li>Channels</li>
            <li>Digital HQ</li>
            <li>Integrations</li>
            <li>Security</li>
            <li>Slack Conncet</li>
            <li>Customers</li>
            <hr />
            <li>Download Slack</li>
          </ProductList>
        </Dropdown>
        <Link href="https://slack.com/solutions">Solutions</Link>
        <Link href="https://slack.com/enterprise">Enterprise</Link>
        <Link href="https://slack.com/resources">Resources</Link>
        <Link href="https://slack.com/pricing">Pricing</Link>
      </Navigation>
      <ButtonContainer>
        <AiOutlineSearch />
        <Link href="https://slack.com/signin">Sign In</Link>
        <Link href="https://slack.com/contact-sales">
          <PurpleBackButton primary>TALK TO SALES</PurpleBackButton>
        </Link>
        <Link href="https://slack.com/get-started">
          <PurpleBackButton>TRY FOR FREE</PurpleBackButton>
        </Link>
      </ButtonContainer>
    </NavBarStyled>
  );
}
