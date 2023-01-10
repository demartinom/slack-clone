import React from "react";
import {
  FooterStyled,
  MetaSocial,
  NavigationColumn,
  PrivacyLinks,
  SiteNavigation,
  SocialIcons,
} from "../../styles/Footer.styled";
import logoLarge from "../../public/assets/logo-large.svg";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineCloudDownload, AiOutlineGlobal } from "react-icons/ai";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import privacy from "../../public/assets/privacy.svg";

export default function Footer() {
  return (
    <FooterStyled>
      <SiteNavigation>
        <Link href="">
          <Image src={logoLarge} alt="logo"></Image>
        </Link>
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
      <hr />
      <MetaSocial>
        <PrivacyLinks>
          <Link href="">Status</Link>
          <Link href="">
            <Image src={privacy} alt="privacy"></Image>
            Privacy
          </Link>
          <Link href="">Terms</Link>
          <Link href="">Your Privacy Choices</Link>
          <Link href="">Cookie Preferences</Link>
          <Link href="">Contact Us</Link>
          <Link href="">
            <AiOutlineGlobal />
            Change Region
          </Link>
        </PrivacyLinks>
        <SocialIcons>
          <Link href="">
            <AiOutlineCloudDownload /> Download Slack
          </Link>
          <Link href="">
            <FaTwitterSquare />
          </Link>
          <Link href="">
            <FaFacebookSquare />
          </Link>
          <Link href="">
            <FaYoutube />
          </Link>
          <Link href="">
            <FaLinkedin />
          </Link>
        </SocialIcons>
      </MetaSocial>
      <p>
        ©2023 Slack Technologies, LLC, a Salesforce company. All rights
        reserved. Various trademarks held by their respective owners.
      </p>
    </FooterStyled>
  );
}
