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
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { PurpleBackButton } from "../../styles/SharedStyles.styled";
import Link from "next/link";
import {
  AiOutlineDown,
  AiOutlineUp,
  AiOutlineCloudDownload,
} from "react-icons/ai";

export default function NavBar(props) {
  const [arrowDirection, setArrowDirection] = React.useState(false);
  function arrowDown() {
    setArrowDirection(true);
  }
  function arrowUp() {
    setArrowDirection(false);
  }
  return (
    <NavBarStyled>
      {props.width > 425 && (
        <>
          <Navigation>
            <Link href="https://slack.com">
              <Image src={logo} alt="slack logo"></Image>
            </Link>
            <Dropdown onMouseEnter={arrowDown} onMouseLeave={arrowUp}>
              <Link href="">
                Product {arrowDirection ? <AiOutlineUp /> : <AiOutlineDown />}
              </Link>
              <ProductList>
                <Link href="https://slack.com/features">Features</Link>
                <Link href="https://slack.com/features/channels">Channels</Link>
                <Link href="https://slack.com/digital-hq">Digital HQ</Link>
                <Link href="https://slack.com/integrations">Integrations</Link>
                <Link href="https://slack.com/security">Security</Link>
                <Link href="https://slack.com/connect">Slack Connect</Link>
                <Link href="https://slack.com/customers">Customers</Link>
                <hr />
                <Link href="https://slack.com/download">
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
        </>
      )}
      {props.width <= 425 && (
        <>
          <Link href="https://slack.com">
            <Image src={logo} alt="slack logo"></Image>
          </Link>
          <AiOutlineSearch />
          <AiOutlineMenu />
        </>
      )}
    </NavBarStyled>
  );
}
