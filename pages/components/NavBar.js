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
import { AiOutlineDown, AiOutlineUp, AiOutlineCloudDownload } from "react-icons/ai";

export default function NavBar() {
  const [arrowDirection, setArrowDirection] = React.useState(false);
  function arrowDown() {
    setArrowDirection(true);
  }
  function arrowUp() {
    setArrowDirection(false);
  }
  return (
    <NavBarStyled>
      <Navigation>
        <Link href="https://slack.com">
          <Image src={logo} alt="slack logo"></Image>
        </Link>
        <Dropdown onMouseEnter={arrowDown} onMouseLeave={arrowUp}>
          <Link href="">
            Product {arrowDirection ? <AiOutlineUp /> : <AiOutlineDown />}
          </Link>
          <ProductList>
            <Link href="">Features</Link>
            <Link href="">Channels</Link>
            <Link href="">Digital HQ</Link>
            <Link href="">Integrations</Link>
            <Link href="">Security</Link>
            <Link href="">Slack Connect</Link>
            <Link href="">Customers</Link>
            <hr />
            <Link href="">
              <AiOutlineCloudDownload />
              Download Slack
            </Link>
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
