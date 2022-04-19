import React from "react";
import LadderRankings from "./components/LadderRankings";
import LadderMatches from "./components/LadderMatches";
import PlayerDetails from "./components/PlayerDetails";

const App = () => {
  return (
    <div>
      <LadderRankings />
      <LadderMatches />
      <PlayerDetails />
    </div>
  );
};

export default App;
