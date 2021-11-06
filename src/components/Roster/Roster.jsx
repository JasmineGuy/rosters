import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./Roster.css";
import axios from "axios";

const Roster = () => {
  const [roster, setRoster] = useState();

  useEffect(() => {
    axios
      .get(
        "https://data.nba.com/data/5s/v2015/json/mobile_teams/nba/2021/teams/nets_roster.json"
      )
      .then((res) => {
        setRoster(res.data.t.pl);
      });
  }, []);

  return (
    <div className="roster">
      <h1>BROOKLYN NETS ROSTER</h1>
      <div className="player-container">
        {roster && roster.length
          ? roster.map((player, index) => (
              <Card
                key={index}
                id={player.pid}
                first={player.fn}
                last={player.ln}
                pos={player.pos}
                num={player.num}
              />
            ))
          : "Loading"}
      </div>
    </div>
  );
};

export default Roster;
