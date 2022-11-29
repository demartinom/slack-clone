import GlobalStyles from "../styles/SharedStyles.styled";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <GlobalStyles />
      <NavBar />
      <Hero />
    </>
  );
}
