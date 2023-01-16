import GlobalStyles from "../styles/SharedStyles.styled";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import TeamsSales from "./components/TeamsSales";
import DeepDive from "./components/DeepDive";
import PreFoot from "./components/PreFoot";
import Footer from "./components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <GlobalStyles />
      <Head>
        <title>Slack is your ditigal HQ | Slack</title>
      </Head>
      <NavBar />
      <Hero />
      <Features />
      <TeamsSales />
      <DeepDive />
      <PreFoot />
      <Footer />
    </>
  );
}
