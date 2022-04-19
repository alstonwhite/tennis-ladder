import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { getFlagEmoji } from "../utils/countriesUtils";

const Title = styled.h1`
  color: green;
`;

const Table = styled.table`
  border-collapse: collapse;
`;

const TableHeading = styled.th`
  border-bottom: 2px solid #222;
  padding: 8px 12px 5px 5px;
  font-size: 12px;
`;

const TableRow = styled.tr`
  &:first-child > * {
    border-top: none;
  }
`;

const TableCell = styled.td`
  border-top: 1px solid #cdcdcd;
  padding: 8px 12px 5px 5px;
  font-size: 16px;
  > * {
    &:first-child {
      border-top: none;
    }
  }
`;

const LadderRankings = () => {
  const ladderId = 1;
  const [playerData, setPlayerData] = useState(null);
  useEffect(() => {
    fetch(`api/ladders/${ladderId}/playersWL`)
      .then((res) => res.json())
      .then((data) => setPlayerData(data));
  }, []);

  console.log("ladderPlayerData", playerData);

  return (
    <div>
      <Title>Ladder Rankings</Title>
      <div>
        <Table>
          <thead>
            <tr>
              <TableHeading>Rank</TableHeading>
              <TableHeading>+/-</TableHeading>
              <TableHeading>Name</TableHeading>
              <TableHeading>W</TableHeading>
              <TableHeading>L</TableHeading>
            </tr>
          </thead>
          <tbody>
            {playerData &&
              playerData
                .sort(
                  (p1, p2) => p1.User_Ladder.ranking - p2.User_Ladder.ranking
                )
                .map((player) => {
                  return (
                    <TableRow key={player.id}>
                      <TableCell>{player.User_Ladder.ranking}</TableCell>
                      <TableCell>
                        {player.User_Ladder.prevRanking ? player.User_Ladder.prevRanking - player.User_Ladder.ranking : "-"}
                      </TableCell>
                      <TableCell>
                        {player.country ? getFlagEmoji(player.country) : "🏴‍☠️"}{" "}
                        {player.firstName} {player.lastName}
                      </TableCell>
                      <TableCell>{player.wonMatches.length}</TableCell>
                      <TableCell>{player.lostMatches.length}</TableCell>
                    </TableRow>
                  );
                })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default LadderRankings;
