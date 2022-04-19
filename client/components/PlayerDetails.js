import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { getFlagEmoji } from "../utils/countriesUtils";

const Title = styled.h1`
  color: green;
`;
const Heading = styled.h2`
  color: black;
`;
const Subheading = styled.h3`
  color: #787878;
`;
const BioLine = styled.p`
    &&::first-letter {
        text-transform: capitalize;
    }
`;

const PlayerDetails = () => {
  const playerId = 1;
  const [playerData, setPlayerData] = useState(null);
  useEffect(() => {
    fetch(`api/users/${playerId}`)
      .then((res) => res.json())
      .then((data) => setPlayerData(data));
  }, []);

  console.log("singlePlayerData", playerData);

  return playerData && (
    <div>
      <Title>Player Details</Title>
      <Heading>Bio</Heading>
      <BioLine>
        {playerData.country ? getFlagEmoji(playerData.country) : "🏴‍☠️"}{" "}
        {playerData.firstName} {playerData.lastName}
      </BioLine>
      <BioLine>{playerData.hometown || "hometown, US"}</BioLine>
      <BioLine>{playerData.heightIns || "5-11"}</BioLine>
      <BioLine>{playerData.handedness || "right"}-handed</BioLine>
      <p>{playerData.bio}</p>
      <Heading>Current Ladder</Heading>
      <Subheading>Current Rating</Subheading>
      <Subheading>Current W-L</Subheading>
      <Subheading>Recent Matches</Subheading>
    </div>
  );
};

export default PlayerDetails;
