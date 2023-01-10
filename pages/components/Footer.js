import React from "react";
import {
  FooterStyled,
  NavigationColumn,
  SiteNavigation,
} from "../../styles/Footer.styled";
import logoLarge from "../../public/assets/logo-large.svg";
import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <FooterStyled>
      <Link href="">
        <Image src={logoLarge} alt="logo"></Image>
      </Link>
      <SiteNavigation>
        <NavigationColumn>
          <h2>WHY SLACK?</h2>
          <Link href="">Slack vs. Email</Link>
          <Link href="">Channels</Link>
          <Link href="">Engagement</Link>
          <Link href="">Scale</Link>
          <Link href="">Watch the Demo</Link>
        </NavigationColumn>
        <NavigationColumn>
          <h2>PRODUCT</h2>
          <Link href="">Features</Link>
          <Link href="">Integrations</Link>
          <Link href="">Enterprise</Link>
          <Link href="">Solutions</Link>
          <Link href="">Releases</Link>
        </NavigationColumn>
        <NavigationColumn>
          <h2>PRICING</h2>
          <Link href="">Plans</Link>
          <Link href="">Paid vs. Free</Link>
        </NavigationColumn>
        <NavigationColumn>
          <h2>RESOURCES</h2>
          <Link href="">Partners</Link>
          <Link href="">Developers</Link>
          <Link href="">Community</Link>
          <Link href="">Apps</Link>
          <Link href="">Blog</Link>
          <Link href="">Help Center</Link>
          <Link href="">Events</Link>
        </NavigationColumn>
        <NavigationColumn>
          <h2>COMPANY</h2>
          <Link href="">About Us</Link>
          <Link href="">Leadership</Link>
          <Link href="">Investor Relations</Link>
          <Link href="">News</Link>
          <Link href="">Media Kit</Link>
          <Link href="">Careers</Link>
        </NavigationColumn>
      </SiteNavigation>
    </FooterStyled>
  );
}
