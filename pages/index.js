import GlobalStyles from "../styles/SharedStyles.styled";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import TeamsSales from "./components/TeamsSales";
import DeepDive from "./components/DeepDive";
import PreFoot from "./components/PreFoot";
import Footer from "./components/Footer";
import Head from "next/head";
import { useWindowWidth } from "@react-hook/window-size";

export default function Home() {
  const width = useWindowWidth();
  return (
    <>
      <GlobalStyles />
      <Head>
        <title>Slack is your digital HQ | Slack</title>
      </Head>
      <NavBar width={width} />
      <Hero width={width} />
      {/*  <Features />
      <TeamsSales />
      <DeepDive />
      <PreFoot />
      <Footer /> */}
    </>
  );
}
