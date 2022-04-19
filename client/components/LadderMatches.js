import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { getFlagEmoji } from "../utils/countriesUtils";

const Title = styled.h1`
  color: green;
`;

const MatchCard = styled.div`
  margin-bottom: 10px;
  padding: 8px;
  width: 400px;
  border: 1px solid #cdcdcd;
  display: flex;
  flex-direction: column;
`;

const MatchCardHeader = styled.div`
  padding: 2px;
  font-size: 10px;
  color: #787878;
  border-bottom: 1px solid #cdcdcd;
`;

const MatchCardScoreTable = styled.table`
  border-collapse: collapse;
`;

const TableCell = styled.td`
  padding: 8px 12px 5px 5px;
  font-size: 14px;
`;

const LadderMatches = () => {
  const ladderId = 1;
  const [matchesData, setMatchesData] = useState(null);
  useEffect(() => {
    fetch(`api/ladders/${ladderId}/matches`)
      .then((res) => res.json())
      .then((data) => setMatchesData(data));
  }, []);

  console.log("matchesData", matchesData);

  return (
    <div>
      <Title>Ladder Matches</Title>
      {matchesData &&
        matchesData.map((match) => {
          return (
            <MatchCard key={match.id}>
              <MatchCardHeader>{match.date || "[Date]"}</MatchCardHeader>
              <MatchCardScoreTable>
                <tbody>
                  <tr key={match.winnerId}>
                    <TableCell>{match.winnerRanking || "[Rank]"}</TableCell>
                    <TableCell>
                      {match.winner.country
                        ? getFlagEmoji(match.winner.country)
                        : "🏴‍☠️"}{" "}
                      {match.winner.firstName} {match.winner.lastName}
                    </TableCell>
                    <TableCell>{match.winnerScoreSet1 || 1}</TableCell>
                    <TableCell>{match.winnerScoreSet2 || 2}</TableCell>
                    <TableCell>{match.winnerScoreSet3 || 3}</TableCell>
                  </tr>
                  <tr key={match.loserId}>
                    <TableCell>[Rank]</TableCell>
                    <TableCell>
                      {match.loser.country
                        ? getFlagEmoji(match.loser.country)
                        : "🏴‍☠️"}{" "}
                      {match.loser.firstName} {match.loser.lastName}
                    </TableCell>
                    <TableCell>{match.loserScoreSet3 || 1}</TableCell>
                    <TableCell>{match.loserScoreSet3 || 2}</TableCell>
                    <TableCell>{match.loserScoreSet3 || 3}</TableCell>
                  </tr>
                </tbody>
              </MatchCardScoreTable>
            </MatchCard>
          );
        })}
    </div>
  );
};

export default LadderMatches;
