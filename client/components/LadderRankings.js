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

// TODO: Fix eliminating border-top on 1st child
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
    fetch(`api/ladders/${ladderId}/players`)
      .then((res) => res.json())
      .then((data) => setPlayerData(data));
  }, []);

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
              playerData.map((player) => {
                return (
                  <tr key={player.id}>
                    <TableCell>1</TableCell>
                    <TableCell>+4</TableCell>
                    <TableCell>
                      {player.country ? getFlagEmoji(player.country) : "🏴‍☠️"}{" "}
                      {player.firstName} {player.lastName}
                    </TableCell>
                    <TableCell>4</TableCell>
                    <TableCell>1</TableCell>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default LadderRankings;
