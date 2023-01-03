import GlobalStyles from "../styles/SharedStyles.styled";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import TeamsSales from "./components/TeamsSales";

export default function Home() {
  return (
    <>
      <GlobalStyles />
      <NavBar />
      <Hero />
      <Features />
      <TeamsSales />
    </>
  );
}
