import React from "react";
import {
  TeamsSalesStyled,
  Statistics,
  SingleStat,
  ButtonContainer,
} from "../../styles/TeamsSales.styled";
import { Button } from "../../styles/SharedStyles.styled";

export default function TeamsSales() {
  return (
    <TeamsSalesStyled>
      <h1>Teams large and small rely on Slack</h1>
      <h3>
        Slack securely scales up to support collaboration at the world’s biggest
        companies.
      </h3>
      <ButtonContainer>
        <Button primary>MEET SLACK FOR ENTERPRISE</Button>
        <Button>TALK TO SALES</Button>
      </ButtonContainer>
      <Statistics>
        <SingleStat>
          <h2>85%</h2>
          <p>of users say Slack has improved communication*</p>
        </SingleStat>
        <SingleStat>
          <h2>86%</h2>
          <p>feel their ability to work remotely has improved*</p>
        </SingleStat>
        <SingleStat>
          <h2>88%</h2>
          <p>feel more connected to their teams*</p>
        </SingleStat>
      </Statistics>
    </TeamsSalesStyled>
  );
}
