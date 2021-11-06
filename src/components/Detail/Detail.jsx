import React, { useState, useEffect } from "react";
import "./Detail.css";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Detail = () => {
  const [stats, setStats] = useState();
  const [playerData, setPlayerData] = useState();
  const [playerId, setPlayerId] = useState();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const id = params.get("id");
    setPlayerId(id);
  }, [location.pathname, location.search]);

  const getStats = async () => {
    let allStats;
    await axios
      .get(
        "https://data.nba.com/data/v2015/json/mobile_teams/nba/2021/teams/nets/player_averages_02.json"
      )
      .then((res) => {
        allStats = res.data.tpsts.pl;
      });

    if (allStats) {
      const foundMatch = allStats.find((stat) => stat.pid === playerId);
      console.log("FOUND: ", foundMatch);
      setPlayerData(foundMatch);
    }
  };

  useEffect(() => {
    if (playerId) {
      getStats();
    }
  }, [playerId]);

  return (
    <div className="details">
      <div className="deets-left">
        <img
          alt="player"
          src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${playerId}.png`}
        />
      </div>
      <div className="deets-right">
        {!playerData ? (
          "Loading"
        ) : (
          <>
            <h1>
              {playerData.fn} {playerData.ln}
            </h1>
            <h3>{playerData.pos}</h3>
          </>
        )}
      </div>
    </div>
  );
};

export default Detail;
